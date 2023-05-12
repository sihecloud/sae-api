import logger from './common/logger';
import { InputProps } from './common/entity';

export default class ComponentDemo {
  /**
   * 列出应用列表
   * @param inputs
   * @returns
   */
  public async list(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`);
    logger.info('list test');
    return { hello: 'world' };
  }

  /**
   * 版本更新
   * @param inputs
   * @returns
   */
  public async upgrade(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`);
    logger.info('upgrade test');
    return { hello: 'world' };
  }

  /**
   * 扩容缩容
   * @param inputs
   * @returns
   */
  public async scale(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`);
    logger.info('scale test');
    return { hello: 'world' };
  }
}
