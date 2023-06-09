import * as core from '@serverless-devs/core';
const { lodash } = core;

export async function handleInputs(args: string, props?: any) {
    const comParse: any = core.commandParse({ args });
    const data = comParse?.data
    let isHelp = false;
    let cluster: string;
    let appId, image: string;
    let replicas: number;
    if (!lodash.isEmpty(data)) {
        isHelp = data?.h || data?.help;
        cluster = data['cluster']?.toString();
        appId = data['appId']?.toString(); // 已知问题：给值为负数（如-100）时，得true
        image = data['image']?.toString(); // 已知问题：给值为负数（如-100）时，得true
        replicas = data['replicas'];
    }
    if (lodash.isNil(cluster)) { // null or undefined
        cluster = props?.cluster;
    }
    if (lodash.isNil(appId)) { // null or undefined
        appId = props?.appId;
    }
    if (lodash.isNil(image)) { // null or undefined
        image = props?.image;
    }
    if (lodash.isNil(replicas)) { // null or undefined
        replicas = props?.replicas;
    }
    return {isHelp, cluster, appId, image, replicas};
}
