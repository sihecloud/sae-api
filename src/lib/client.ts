import * as core from '@serverless-devs/core';
// @ts-ignore
const ROAClient = core.popCore.ROAClient;

export default class Client {
    static saeClient: any;

    static async setSaeClient(endpoint, credentials) {
        const saeClient = new ROAClient({
            accessKeyId: credentials?.AccessKeyID,
            accessKeySecret: credentials?.AccessKeySecret,
            endpoint: endpoint,
            apiVersion: "2019-05-06",
        });

        const queries = {};
        const headers = {
            "Content-Type": "application/json",
        };
        const requestOption = {
            timeout: 30000,
        };
        const ListApplicationsUri = '/container/v1/sdev';
        const RescaleApplicationUri = '/container/v1/sdev/replica';
        const UpgradeApplicationUri = '/container/v1/sdev/image';

        /**
         * 获取应用列表
         * @returns 应用列表
         */
        saeClient.listApplications = async function () {
            const data = await saeClient.request("GET", ListApplicationsUri, queries, ``, headers, requestOption);
            return data;
        }

        /**
         * 扩缩容
         * @param appId 应用ID
         * @param replicas 目标副本数
         * @returns 操作结果
         */
        saeClient.rescaleApplication = async function (appId: string, replicas: number) {
            const body = JSON.stringify({
                "appId": appId,
                "replicas": replicas,
            });
            const data = await saeClient.request("POST", RescaleApplicationUri, queries, body, headers, requestOption);
            return data;
        }

        /**
         * 版本更新
         * @param appId 应用ID
         * @param image 镜像Uri
         * @returns 操作结果
         */
        saeClient.upgradeApplication = async function (appId: string, image: string) {
            const body = JSON.stringify({
                "appId": appId,
                "image": image,
            });
            const data = await saeClient.request("POST", UpgradeApplicationUri, queries, body, headers, requestOption);
            return data;
        }

        this.saeClient = saeClient;
        return saeClient;
    }
}
