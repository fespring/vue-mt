# github常用代码

1. git 的安装
2. 获取源代码
```
git clone https://github.com/lihongmi/canvas_sub.git
```
3. 生成公钥
```
ssh-keygen -C 'jiaoshibo@outlook.com' -t rsa
```
4. 输入账号和用户名
```
git config --global user.email "exp@exp.com"
git config --global user.name "username"
```
5. 上传源代码
```
git init
git add *
git commit -m "first commit"

git remote add origin https://github.com/......
git push -u origin master
```

6. 删除分支
```
git push origin -d gh-pages
```
7. 查看当前分支
```
git branch
```
8. 切换分支
```
git checkout 分支名
```
9. 获取服务器最新状态
```
git pull origin
```
10. 回退分支
```
git log

git reset 哈希值
```
11. 合并分支
```
git checkout dev

git merge jiaoshibo
```

10. 展示个人项目
```
创建 gh-pages 分支
https://lihongmi.github.io/canvas_sub
https://jiaoshibo.github.io/Snake
```