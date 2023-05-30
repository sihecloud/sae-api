import * as core from '@serverless-devs/core';
const { lodash } = core;
// import logger from './common/logger';
// @ts-ignore
const ROAClient = core.popCore.ROAClient;

export default class Client {
    static saeClient: any;

    static async setSaeClient(cluster, credentials) {
        let endpoint = "https://mono-backend.sihe.cloud";
        if (cluster == "staging") {
            endpoint = "https://mono-backend.staging.sihe6.com";
        }else if (cluster == "qa") {
            endpoint = "http://mono-backend-0.qa.sihe6.com";
        } else if (cluster == "dev" || cluster == "local") {
            endpoint = "http://localhost:8080";
        } else if (cluster?.length > 0) {
            endpoint = cluster;
        }

        const saeClient = new ROAClient({
            accessKeyId: credentials?.AccessKeyID,
            accessKeySecret: credentials?.AccessKeySecret,
            endpoint: endpoint,
            apiVersion: "v1",
        });

        const queries = {};
        const headers = {
            "Content-Type": "application/json",
        };
        const requestOption = {
            timeout: 30000,
        };
        const ListApplicationsUri = '/api/container/v1/sdev';
        const RescaleApplicationUri = '/api/container/v1/sdev/replica';
        const UpgradeApplicationUri = '/api/container/v1/sdev/image';

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
                "app_id": appId,
                "replicas": replicas,
            });
            let data = await saeClient.request("POST", RescaleApplicationUri, queries, body, headers, requestOption);
            if (lodash.isEmpty(data))
                data = "操作成功";
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
                "app_id": appId,
                "image_url": image,
            });
            let data = await saeClient.request("POST", UpgradeApplicationUri, queries, body, headers, requestOption);
            if (lodash.isEmpty(data))
                data = "操作成功";
            return data;
        }

        this.saeClient = saeClient;
        return saeClient;
    }
}
