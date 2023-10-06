---
title: IDEA 等工具中常用插件及破解
order: 6
category:
  - Tools
  - HelloIDEA
  - MD
---

###  一般插件破解

1. [点击下载相关插件](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/tools/LicenseServer-obfuscate-2.0.0.zip)

![image-20230923185945079](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923185945079.png)

2. 打开 IDEA 的 插件市场
3. 通过磁盘安装插件

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185134.png)

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185226.png)

4. 进行插件配置

挨个点击并定位至  *.vmproperties 中 -javaagent 所指向的位置

![image-20230923191929144](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191929144.png)

![image-20230923191942469](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923191942469.png)

验证

![image-20230923192147785](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923192147785.png)

配置元信息

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185322.png)

```xml
{
    "licenseId": "D02JT2S8T0",
    "licenseeName": "授权对象名称（自定义）",
    "assigneeName": "",
    "assigneeEmail": "",
    "licenseRestriction": "",
    "checkConcurrentUse": false,
    "products": [
        {
            "code": "II",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PFASTREQUEST",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PCWMP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PRAINBOWBRACKET",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PGITTOOLBOX",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "AC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DPN",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RSC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RSF",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "GO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DM",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "CL",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RS0",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RD",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RSV",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RSU",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "RM",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "WS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "DC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PDB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PWS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PGO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PPS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PPC",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PRB",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PSW",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PSI",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PCWMP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "DP",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "RS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PELASTICSEARCH",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PBASHSUPPORTPRO",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": true
        },
        {
            "code": "PMYBATISHELPER",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PCMAKEPLUS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        },
        {
            "code": "PEXTRAICONS",
            "paidUpTo": "2025-05-02",
            "fallbackDate": "2025-05-02",
            "extended": false
        }
    ],
    "metadata": "0120211231PSAN000005",
    "hash": "15021354/0:-1251114717",
    "gracePeriodDays": 7,
    "isAutoProlongated": false
}
```

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185438.png)

5. 激活

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185527.png)

## Jrebel and XRebel

![](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/20230923185815.png)

根据提示步骤激活即可

![image-20230923185857667](https://yong-gan-niu-niu-1311841992.cos.ap-beijing.myqcloud.com/images/image-20230923185857667.png)