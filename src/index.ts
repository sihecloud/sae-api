import logger from './common/logger';
import { InputProps } from './common/entity';
import * as core from '@serverless-devs/core';
const { lodash } = core;
import * as HELP from './lib/help';
import Client from './lib/client';
import * as inputHandler from './lib/input-handler';

export default class ComponentDemo {
  /**
   * 列出应用列表
   * @param inputs
   * @returns
   */
  public async list(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs)}`);

    const { args } = inputs;
    const { isHelp, cluster } = await inputHandler.handleInputs(args);
    if (isHelp) {
      core.help(HELP.LIST);
      return;
    }
    
    const credentials = await core.getCredential(inputs.project?.access);
    await Client.setSaeClient(cluster, credentials);
    let data = await Client.saeClient.listApplications();
    return data;
  }

  /**
   * 版本更新
   * @param inputs
   * @returns
   */
  public async upgrade(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs)}`);

    const { args, props } = inputs;
    const { isHelp, cluster, appId, image } = await inputHandler.handleInputs(args, props);
    if (isHelp) {
      core.help(HELP.LIST);
      return;
    }
    if (lodash.isNil(appId)) {
      throw new core.CatchableError('参数 appId 不能为空');
    }
    if (lodash.isEmpty(image)) {
      throw new core.CatchableError('参数 image 不能为空');
    }

    const credentials = await core.getCredential(inputs.project?.access);
    await Client.setSaeClient(cluster, credentials);
    let data = await Client.saeClient.upgradeApplication(appId, image);
    return data;
  }

  /**
   * 扩容缩容
   * @param inputs
   * @returns
   */
  public async rescale(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs)}`);

    const { args, props } = inputs;
    const { isHelp, cluster, appId, replica } = await inputHandler.handleInputs(args, props);
    if (isHelp) {
      core.help(HELP.LIST);
      return;
    }
    if (lodash.isNil(appId)) {
      throw new core.CatchableError('参数 appId 不能为空');
    }
    if (lodash.isNil(replica)) {
      throw new core.CatchableError('参数 replica 不能为空');
    }
    if (!lodash.isInteger(replica)) {
      throw new core.CatchableError('参数 replica 需要为自然数');
    }

    const credentials = await core.getCredential(inputs.project?.access);
    await Client.setSaeClient(cluster, credentials);
    let data = await Client.saeClient.rescaleApplication(appId, replica);
    return data;
  }
}
