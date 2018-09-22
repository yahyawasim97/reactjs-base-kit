/*
 * @file: stringMethods.js
 * @description: create custom string methods
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

String.prototype.capitalizeFirstLetter = () => this.charAt(0).toUpperCase() + this.slice(1);
String.prototype.capitalizeEachLetter = this.toLowerCase()
  .split(' ')
  .map((word) => word.capitalizeFirstLetter())
  .join(' ');
