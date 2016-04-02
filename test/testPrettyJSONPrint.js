/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
require('babel-register');
var lib = require('../src/application/api/utils/printProps.js');

var c = {
    greatings: "Hello World!!!",
    style: {
        width: '100%',
        height: 100.56,
        xs: 4,
        textAlign: 'center'
    }
};

console.log(lib.printProps(c));