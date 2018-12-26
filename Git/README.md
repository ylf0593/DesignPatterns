## 初始化
```
git config --list
git config --global user.name 'xxx'
git config --global user.email 'xxx'
```

## 仓库使用

查看当前仓库

origin - 这是 Git 给你克隆的仓库服务器的默认名字

```
git remove -v //显示当前仓库简写和URL
git remove show origin //显示详细信息
```

克隆仓库

```
//迁出默认分支Master
git clone http:xxxx/xxx.git 'xxx'
//签出指定分支并创建自定义文件夹
git clone https://git.oschina.net/oschina/android-app.git  AndroidApp -b v2.8.1 
```
## 获取远程更新

```
git pull //获取并和本地合并
git fetch //获取更新但是不和本地合并
```
usage 
```
git pull master
===>等效于以下
git fetch origin
git merge origin/master
```



## 状态查看

```
git status 
git status -s //查看简版状态
```

状态 | 说明
---|---
A | 已经add
M | 修改，未add
?? | 新增未add
UU | 冲突

## 跟踪、暂存文件修改

开始跟踪新文件，把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。将这个命令理解为“添加内容到下一次提交中”
```
git add index.html //暂存某个文件
git add ./ //暂存所有文件
```

取消暂存

```
git reset  //取消所有暂存
git reset HEAD <filename>//取消某个文件暂存
```

还原文件（撤销操作）
```
git checkout -- <filename> 
```

## 查看变更内容

```
git diff  //查看未暂存的变更内容
git diff index.html
git diff --staged  //查看已经暂存的变更内容
```

## 提交文件

提交时记录的是放在暂存区域的快照
```
git commit -m 'dd'
```
自动暂存并提交（只处理Modify的文件，新增的文件无法使用）
```
git commit -a -m 'dd'
```

撤销上次commit的提交备注，使用这次的备注（将两次commit合并为一次commit）

```
git commit --amend -m '新的备注'
```

## 查看提交日志
```
git log
git log -p -2 //查看最近几次
```

## 推送
```
git push //推动到当前分支
git push --u origin master//推动到新分支
git push --u origin master//推动到新分支 master自动扩展为： refs/heads/master:refs/heads/master
```

## 移除文件

```
git rm <file> -f //从暂存区移除文件
```

## 定义别名

```
git config --global alias.unstage 'reset HEAD --'
git ustage <file> === git reset HEAD -- <file>
```

## 分支处理

 HEAD:在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将 HEAD 想象为当前分支的别名）

查看分支
```
git branch //查看当前本地分支
git branch -a //查看所有分支
git branch --merged //已经合并到当前分支的分支
git branch --no-merged//未和当前合并的分支
```

创建分支
```
git branch <name>//仅创建分支
git checkout -b <name>//创建并切换到分支
```

切换分支
```
git checkout <name>
```

删除分支
```
git branch -d <hotfix>
//删除远程分支
git push origin --delete serverfix
```

合并分支

```
git checkout <targetName>
git pull
git checkout <name>
git merge <targetName>//合并本地分支
===>等效于
git merge origin/<targetName>//合并远程分支
```
如果和合并的分支没有冲突，则指针前移：Fast-forward



## 分支合并冲突处理

```
git merge \<name\>
git status

//处理冲突 
<<<<<<< HEAD
<div class="submiiter_container2323sdf">
    asdfs
</div>
=======
<div class="submiiter_containerasdf">sdf</div>
>>>>>>> origin/develop

git add .
git commit 
git push
```
## 储藏stash

储藏本地更改
```
git stash
```

查看储藏列表

```
git stash list
```

应用储藏

```
git stash apply //应用最新的一个
git stash apply stash@{2}//应用某个
```

删除储藏
```
git stash drop stash@{0}//删除
```

使用stash来处理pull时的冲突问题
```
git stash
git pull
git stash apply
//处理代码中冲突
git add .
...
```
 

## github 工作流