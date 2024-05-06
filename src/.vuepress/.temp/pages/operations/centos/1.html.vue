<template><div><h1 id="基于centos搭建lamp环境" tabindex="-1"><a class="header-anchor" href="#基于centos搭建lamp环境"><span>基于CentOS搭建LAMP环境</span></a></h1>
<p>原链接：<a href="https://zhuanlan.zhihu.com/p/668734068" target="_blank" rel="noopener noreferrer">基于CentOS搭建LAMP环境 - 知乎 (zhihu.com)<ExternalLinkIcon/></a></p>
<h2 id="一、安装-apache-服务" tabindex="-1"><a class="header-anchor" href="#一、安装-apache-服务"><span>一、安装 Apache 服务</span></a></h2>
<p>1、安装Apache服务及其扩展包。</p>
<p>yum -y install httpd httpd-manual mod_ssl mod_perl mod_auth_mysql
返回类似如下图结果则表示安装成功。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401165625.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>2、启动Apache服务。</p>
<p>systemctl start httpd.service
3、在本地电脑的浏览器的址栏中，输入ECS公网登录地址，并按Enter键。若返回页面如下图所示，说明Apache服务启动成功。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164425.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="二、安装并配置mysql" tabindex="-1"><a class="header-anchor" href="#二、安装并配置mysql"><span>二、安装并配置MySQL</span></a></h2>
<p>MySQL是最流行的关系型数据库管理系统，在WEB应用方面MySQL是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。</p>
<p>1、下载并安装 MySQL 官方的 Yum Repository。</p>
<p>wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql-community-server --nogpgcheck
2、查看MySQL版本号。</p>
<p>systemctl start mysqld.service
3、查看MySQL初始密码。</p>
<p>grep &quot;password&quot; /var/log/mysqld.log</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164457.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>4、登录数据库。</p>
<p>mysql -uroot -p</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164507.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>5、输入MySQL的初始密码。</p>
<p>说明：在输入密码时，界面不会显示密码。</p>
<p>6、修改MySQL默认密码。</p>
<p>set global validate_password_policy=0;  #修改密码安全策略为低（只校验密码长度，至少8位）。
ALTER USER 'root'@'localhost' IDENTIFIED BY '12345678';</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164559.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>7、授予root用户远程管理权限。</p>
<p>GRANT ALL PRIVILEGES ON <em>.</em> TO 'root'@'%' IDENTIFIED BY '12345678';</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164613.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>8、输入exit退出数据库。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164621.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="三、安装php" tabindex="-1"><a class="header-anchor" href="#三、安装php"><span>三、安装PHP</span></a></h2>
<p>PHP（PHP：Hypertext Preprocessor递归缩写）中文名字是：“超文本预处理器”，是一种广泛使用的通用开源脚本语言，适合于Web网站开发，它可以嵌入HTML中。编程范型是面向对象、命令式编程的。</p>
<p>1、安装PHP环境。</p>
<p>yum -y install php php-mysql gd php-gd gd-devel php-xml php-common php-mbstring php-ldap php-pear php-xmlrpc php-imap</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164634.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>2、创建PHP测试页面。</p>
<p>echo &quot;<?php phpinfo(); ?>&quot; &gt; /var/www/html/phpinfo.php</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164644.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>3、重启Apache服务。</p>
<p>systemctl restart httpd</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164653.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>4、在本地浏览器的址栏中，访问http://&lt;ECS公网IP&gt;/phpinfo.php，显示如下页面表示PHP语言环境安装成功。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164701.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="四、安装phpmyadmin" tabindex="-1"><a class="header-anchor" href="#四、安装phpmyadmin"><span>四、安装phpMyAdmin</span></a></h2>
<p>phpMyAdmin是一个MySQL数据库管理工具，通过Web接口管理数据库方便快捷。</p>
<p>1、创建phpMyAdmin数据存放目录。</p>
<p>mkdir -p /var/www/html/phpmyadmin</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164715.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>2、下载phpMyAdmin压缩包。</p>
<p>wget --no-check-certificate https://labfileapp.oss-cn-hangzhou.aliyuncs.com/phpMyAdmin-4.0.10.20-all-languages.zip</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164722.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>3、安装unzip并解压phpMyAdmin压缩包。</p>
<p>yum install -y unzip
unzip phpMyAdmin-4.0.10.20-all-languages.zip
4、复制phpMyAdmin文件到数据存放目录。</p>
<p>mv phpMyAdmin-4.0.10.20-all-languages/*  /var/www/html/phpmyadmin
5、在本地浏览器的址栏中，输入http://实例公网 IP/phpmyadmin，访问phpMyAdmin。返回页面如下图所示，说明phpMyAdmin安装成功。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164739.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>6、在phpMyAdmin登录页面，依次输入MySQL的用户名和密码，单击执行。</p>
<p>返回页面如下图所示，表示MySQL连接成功。</p>
<figure><img src="https://gitee.com/m-yuan-zz/pic-img/raw/master/images/20240401164747.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</div></template>


