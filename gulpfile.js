/**
 * Created by huangxinghui on 2014/12/11.
 */
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', {recurse: true});