# 基础的 powershell 命令

2017年3月微软发布了正式发布windows10创意者更新，超级菜单的默认命令行工具由 CMD 更改为 powershell 

* 切换目录： cd 
    * 跳转下一级： cd 文件夹名称
    * 向上跳转： cd ..
    * 返回系统根目录： cd /
* 新建文件： cd > 文件名.后缀
* 删除文件： del 文件名.后缀
* 重命名文件：ren 原文件名 新文件名
* 新建文件夹：md 文件夹
* 删除文件夹：del 文件夹
* 重命名文件夹： ren 原文件名 新文件名
* 使用powershell打开文件： ./文件名.后缀
* 得到Powshell所有命令： get-command
* 获取所有进程：get-process