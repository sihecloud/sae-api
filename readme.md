<h1 align="center">思核云 SAE 应用部署组件</h1>
<p align="center" class="flex justify-center">
  <a href="https://nodejs.org/en/" class="ml-1">
    <img src="https://img.shields.io/badge/node-%3E%3D%2010.8.0-brightgreen" alt="node.js version">
  </a>
  <a href="https://github.com/sihecloud/sae-api/blob/master/LICENSE" class="ml-1">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="license">
  </a>
  <a href="https://github.com/sihecloud/sae-api/issues" class="ml-1">
    <img src="https://img.shields.io/github/issues/devsapp/sae" alt="issues">
  </a>
  </a>
</p>

# 思核云

![思核云](https://console.sihe.cloud/assets/sihe-logo-03921f6b.png)

[思核云计算控制台](https://console.sihe.cloud/)

# 组件简介

`SAE` 组件帮助用户管理思核云提供的 Serverless应用引擎 SAE，通过 `s cli`命令快速完成应用升级和扩缩容。

# 组件能力

应用部署（SAE）组件全部支持的能力列表如下：

- 应用列表：list
- 扩缩容：rescale
- 更新版本：upgrade

# 使用方法

## 1. 安装Serverless-devs

通过 [npm](https://www.npmjs.com/) 包管理安装：适用于已经预装了 npm 的 Windows、Mac、Linux 平台。在 Windows、Mac、Linux 平台执行以下命令安装 Serverless Devs Tool工具。

```shell
$ npm install @serverless-devs/s -g
```

或者 通过 [yarn](https://yarnpkg.com/) 进行安装

```shell
$ yarn global add @serverless-devs/s
```

更多安装方式请参考 [Serverless-devs 文档](https://docs.serverless-devs.com/serverless-devs/install)。

## 2. 配置AKSK

登录思核云控制台，生成AKSK，然后添加s账户配置。

```shell
$ YourAccessID=I1234     # 等号右边替换为你的AK
$ YourAccessSecret=S5678 # 等号右边替换为你的SK
$ s config add -a default -kl AccessKeyID,AccessKeySecret -il $YourAccessID,$YourAccessSecret
$ s config get # 查看账户配置
```

## 3. 管理SAE应用

查看应用列表：

```shell
$ s cli sae-api list
```

扩缩容：下述命令将id为 `123-456`的应用，副本数调整为3。

```shell
$ s cli sae-api rescale --appId=123-456 --replicas=3
```

更新版本：下述命令将id为 `123-456`的应用，镜像版本更新为nginx:latest。

```shell
$ s cli sae-api upgrade --appId=123-456 --image=nginx:latest
```

# 开源许可

Serverless Devs SEA 组件遵循 [MIT License](./LICENSE) 开源许可。

位于 `node_modules`和外部目录中的所有文件都是本软件使用的外部维护库，具有自己的许可证；我们建议您阅读它们，因为它们的条款可能与[MIT License](./LICENSE)的条款不同。

# 交流社区

您如果有关于错误的反馈或者未来的期待，您可以在 [SAE-API repo Issues](https://github.com/sihecloud/sae-api/issues) 中进行反馈和交流。
