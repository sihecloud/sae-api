import * as core from '@serverless-devs/core';
const { lodash } = core;

export async function handleInputs(args: string, application: any) {
    const comParse: any = core.commandParse({ args });
    const data = comParse?.data
    let isHelp = false;
    let appId, image, replica;
    if (!lodash.isEmpty(data)) {
        isHelp = data?.h || data?.help;
        appId = data['appId'];
        image = data['image'];
        replica = data['replica'];
    }
    if (lodash.isNil(appId)) { // null or undefined
        appId = application?.appId;
    }
    if (lodash.isNil(image)) { // null or undefined
        image = application?.image;
    }
    if (lodash.isNil(replica)) { // null or undefined
        replica = application?.replica;
    }
    return {isHelp, appId, image, replica};
}
