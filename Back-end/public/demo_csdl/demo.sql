/*


Source Server         : local
Source Server Version : 50524
Source Host           : localhost:3000
Source Database       : chlaptop

*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `CatID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`CatID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Laptop gaming');
INSERT INTO `categories` VALUES ('2', 'Laptop Văn phòng');
INSERT INTO `categories` VALUES ('3', 'Laptop Doanh nhân');
INSERT INTO `categories` VALUES ('4', 'Laptop Ultrabook');


-- Table structure for `producers`
-- ----------------------------
DROP TABLE IF EXISTS `producers`;
CREATE TABLE `producers` (
  `ProduID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ProduName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ProduID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of producers
-- ----------------------------
INSERT INTO `producers` VALUES ('1', 'Asus');
INSERT INTO `producers` VALUES ('2', 'Dell');
INSERT INTO `producers` VALUES ('3', 'Mac');
INSERT INTO `producers` VALUES ('4', 'MSI');

-- ----------------------------
-- Table structure for `orderdetails`
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderID` int(11) NOT NULL,
  `ProID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` bigint(20) NOT NULL,
  `Amount` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `OrderID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderDate` datetime NOT NULL,
  `UserID` int(11) NOT NULL,
  `Total` bigint(20) NOT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `ProID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `Views` int(11) NOT NULL,
  `Sales` int(11) NOT NULL,
  `Des` text COLLATE utf8_unicode_ci NOT NULL,
  `CatID` int(11) NOT NULL,
  `ProduID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  PRIMARY KEY (`ProID`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES('1','LAPTOP ASUS A540UP-DM094T ','11900000 ','150','15',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA AMD Radeon R5 M420 2G DDR3 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.9kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','55');
INSERT INTO `products` VALUES('2','LAPTOP GL503VM-GZ219T ','32490000  ','133','23',
'<p> - CPU Intel Core i7 7700HQ (2.8GHz Up to 3.8GHz, 6MB Cache)<br>
- RAM 8GB DDR4 - 2400MHz<br>
- SSHD 1TB 5400rpm + 8GB NAND<br>
- VGA NVIDIA GeForce GTX 1060 3GB GDDR5 + Intel HD Graphics 630<br>
- Màn hình: 15.6" FHD (1920 x 1080) 120Hz<br>
- Trọng lượng: ~ 2.3kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','34');
INSERT INTO `products` VALUES('3','LAPTOP ASUS GL503VM-GZ254T  ','39990000 ','63','7',
'<p> - CPU Intel Core i7-7700HQ<br>
- RAM 16GB<br>
- Ổ cứng: SSD 256GB + HDD 1TB<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 2.3kg<br>
- Hệ điều hành: Windows 10<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','69');
INSERT INTO `products` VALUES('4','LAPTOP S510UA-BQ111T ','13290000 ','57','8',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm, x1 slot SSD (M.2/SATA)<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.7kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','47');
INSERT INTO `products` VALUES('5','LAPTOP ASUS TP410UA-EC250T  ','13990000  ','77','10',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14.0" FHD (1920 x 1080) TouchScreen<br>
- Trọng lượng: ~ 1.8kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','34');
INSERT INTO `products` VALUES('6','LAPTOP ASUS UX430UN-GV097T ','26990000  ','88','11',
'<p> - CPU Intel® Core™ i7-8550U (1.8GHz Up to 4.0GHz, 8MB Cache)<br>
- RAM 8GB DDR4 - 2400MHz<br>
- SSD 256GB (M.2/SATA)<br>
- VGA NVIDIA GeForce MX150 2GB GDDR5 + Intel UHD Graphics 620<br>
- Màn hình: 14.0" FHD (1920 x 1080)<br>
- Trọng lượng: 1.25kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','56');
INSERT INTO `products` VALUES('7','LAPTOP ASUS UX510UX-CN204','15490000 ','450','51',
'<p> - CPU Intel Core i5-7200U (2.5GHz Up to 3.1GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA NVIDIA GeForce 950M 2GB GDDR5 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 2kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','96');
INSERT INTO `products` VALUES('8','LAPTOP ASUS X405UA-BV330T  ','11790000  ','542','77',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14.0" HD (1366 x 768)<br>
- Trọng lượng: ~ 1.6kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','77');
INSERT INTO `products` VALUES('9','LAPTOP ASUS X510UQ-BR570  ','13990000  ','344','44',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA AMD Radeon R5 M420 2G DDR3 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.9kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','65');
INSERT INTO `products` VALUES('10','LAPTOP ASUS X541UA-GO1384  ','10390000','233','15',
'<p> - CPU Intel Core i5-7200U (2.5GHz Up to 3.1GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 15.6" HD (1366 x 768)<br>
- Trọng lượng: ~ 2kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','75');
-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `f_ID` int(11) NOT NULL AUTO_INCREMENT,
  `f_Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `f_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_DOB` date NOT NULL,
  `f_Permission` int(11) NOT NULL,
  PRIMARY KEY (`f_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
