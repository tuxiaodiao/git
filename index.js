//工作区 ———— 暂存区 ———— 仓库 ———— 远程仓库
        //add    //commit   //push


mkfile  //创建文件
git init    //创建git仓库
git push https://github.com/tuxiaodiao/git.git master   //推送到远程分支
git config --global user.name shandaiwang   //添加Git显示名称
git config --global user.email 1364860639@qq.com    //添加Git显示地址
git remote add git https://github.com/tuxiaodiao/git.git    //设置远程推送别名
git push git master     //设置远程推送别名后推送
git pull git master     //拉取远程最新代码
git log     //查看commit记录
git log --pretty=oneline    //查看commit记录(一行显示)
git reset --hard 版本号     //回退到某个版本
git reflog  //查看回退之前所有版本号
git checkout -b 分支名  //添加并切换到分支
git branch  //查看分支
git branch -d 分支名    //删除分支
git remote -v   //查看别名远程地址
git remote remove 别名  //删除别名


