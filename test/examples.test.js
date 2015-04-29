var test = require('tap').test;
var spdx = require('spdx');
var correct = require('..');

var examples = {
  '0.0.1': null,
  '0.0.3': null,
  '0091': null,
  '0.1.1': null,
  '0': null,
  '1000': null,
  '1.0.0': null,
  '111111': null,
  '1234567': null,
  '1234': null,
  '123': null,
  '1.2': null,
  '2014.11.05': null,
  '©2014 Seedalpha': null,
  '© 2014 WTFPL – Do What the Fuck You Want to Public License.': 'WTFPL',
  '2 clause BSD': 'BSD-2-Clause',
  '2-clause-BSD': 'BSD-2-Clause',
  '3776633071': null,
  '3-clause BSD': 'BSD-3-Clause',
  '3-Clause BSD': 'BSD-3-Clause',
  '3-Clause-BSD': 'BSD-3-Clause',
  '616079491': null,
  '8888': null,
  '992375': null,
  'Affero General Public License v3': 'AGPL-3.0',
  'Affero GPL3': 'AGPL-3.0',
  'Affero-GPL': 'AGPL-3.0',
  'Affero GPL or Commercial': null,
  'Affero GPL v3': 'AGPL-3.0',
  'AFL/BSD': null,
  'AGPL 3.0':'AGPL-3.0',
  'AGPL 3': 'AGPL-3.0',
  'AGPL-3': 'AGPL-3.0',
  'AGPL3': 'AGPL-3.0',
  'AGPL': 'AGPL-3.0',
  'AGPL, Copyright 2014 uh-sem-blee, Co.': 'AGPL-3.0',
  'AGPL v3': 'AGPL-3.0',
  'AGPLv3': 'AGPL-3.0',
  'AGPLv3+': 'AGPL-3.0',
  'AGPLV3': 'AGPL-3.0',
  'AGPLv3 with linking exception': null,
  'AII': null,
  'All rights reserved Dr. Nawwaf Kharma (http://drkharma.com)': null,
  'All rights reserved.': null,
  'All rights reserved': null,
  'All Rights Reserved': null,
  'ALv2.0': null,
  'ALv2': null,
  'ALV2': null,
  'A': null,
  'ANY LICENSE YOU WANT': null,
  'AOL/MIT': 'MIT',
  'APA-2': null,
  'Apacache License 2.0': 'Apache-2.0',
  'Apache 2.0': 'Apache-2.0',
  'Apache_2_0': 'Apache-2.0',
  'Apache-2.0': 'Apache-2.0',
  'Apache2.0': 'Apache-2.0',
  'Apache20': 'Apache-2.0',
  'APACHE 2.0': 'Apache-2.0',
  'APACHE-2.0': 'Apache-2.0',
  'APACHE2_0': 'Apache-2.0',
  'APACHE2.0': 'Apache-2.0',
  'APACHE20': 'Apache-2.0',
  'Apache 2.0 http://www.apache.org/licenses/': 'Apache-2.0',
  'Apache 2.0 License': 'Apache-2.0',
  'Apache 2': 'Apache-2.0',
  'Apache-2': 'Apache-2.0',
  'Apache2': 'Apache-2.0',
  'APACHE 2': 'Apache-2.0',
  'APACHE-2': 'Apache-2.0',
  'APACHE2': 'Apache-2.0',
  'Apache 2 License': 'Apache-2.0',
  'Apache ': 'Apache-2.0',
  'Apache': 'Apache-2.0',
  'APACHE': 'Apache-2.0',
  'Apache Licence 2.0': 'Apache-2.0',
  'Apache Licence v2': 'Apache-2.0',
  'Apache License 2.0': 'Apache-2.0',
  'Apache License, 2.0': 'Apache-2.0',
  'Apache-License-2.0': 'Apache-2.0',
  'Apache License 2.': 'Apache-2.0',
  'Apache License 2': 'Apache-2.0',
  'Apache License': 'Apache-2.0',
  'Apache License v2.0': 'Apache-2.0',
  'Apache License, v2.0': 'Apache-2.0',
  'Apache License V2.0': 'Apache-2.0',
  'Apache License v2': 'Apache-2.0',
  ' Apache License V2': 'Apache-2.0',
  'Apache License V2': 'Apache-2.0',
  'Apache License version 2.0': 'Apache-2.0',
  'Apache License Version 2.0,': 'Apache-2.0',
  'Apache License Version 2.0': 'Apache-2.0',
  'Apache License, Version 2.0': 'Apache-2.0',
  'Apache License, Version 2.0, http://www.apache.org/licenses/LICENSE-2.0': 'Apache-2.0',
  'Apache License, version 2': 'Apache-2.0',
  'Apache lisence V2': 'Apache-2.0',
  'Apache lisense 2.0': 'Apache-2.0',
  'Apache Public License v2': 'Apache-2.0',
  'Apache Public License, Version 2': 'Apache-2.0',
  'Apache Software License 2.0': 'Apache-2.0',
  'Apache Software License Version 2': 'Apache-2.0',
  'Apache v2.0': 'Apache-2.0',
  'Apache-v2.0': 'Apache-2.0',
  'Apache, v2.0': 'Apache-2.0',
  'Apache V2.0': 'Apache-2.0',
  'APACHE V2.0': 'Apache-2.0',
  'Apache v. 2': 'Apache-2.0',
  'Apache v2': 'Apache-2.0',
  'Apache-v2': 'Apache-2.0',
  'Apachev2': 'Apache-2.0',
  'Apache V2': 'Apache-2.0',
  'Apache-V2': 'Apache-2.0',
  'ApacheV2': 'Apache-2.0',
  'APACHE-V2': 'Apache-2.0',
  'Apache v2 License': 'Apache-2.0',
  'Apache version 2.0': 'Apache-2.0',
  'Apache Version 2.0': 'Apache-2.0',
  'Apache, Version 2.0': 'Apache-2.0',
  'Apache version 2': 'Apache-2.0',
  'Apache Version 2': 'Apache-2.0',
  'APGLv3': 'AGPL-3.0',
  'APL 2.0': 'Apache-2.0',
  'APL2': 'Apache-2.0',
  'APL': 'Apache-2.0',
  'APLv2': 'Apache-2.0',
  'Appcelerator Commercial - Appcelerator Proprietary and Confidential': null,
  'Appcelerator Commercial License': null,
  'Appcelerator Commercial': null,
  'Appcelerator Commercial / Proprietary and Confidential': null,
  'Appcelerator Commercial / Proprietary': null,
  'Appcelerator Software License (non-open source)': null,
  'ARR': null,
  'ArtDesignCreative': null,
  'Artistic 2.0': 'Artistic-2.0',
  'Artistic': 'Artistic-2.0',
  'Artistic License 2.0': 'Artistic-2.0',
  'Artistic License': 'Artistic-2.0',
  'Asdasd': null,
  'Asd': null,
  'ASF 2.0': null,
  'ASF2.0': null,
  'ASF 2': null,
  'ASF2': null,
  'ASF v2': null,
  'AS IS': null,
  'ASL 2.0': null,
  'ASL2': null,
  'ASL': null,
  'ASLv2': null,
  'Ateoa': null,
  'Attribution-NonCommercial': 'CC-BY-NC-4.0',
  'Attribution-NonCommercial-NoDerivatives 4.0 International': 'CC-BY-NC-ND-4.0',
  'Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)': null,
  'At your own risk.': null,
  'AVL2': null,
  'BAT': null,
  'BCA': null,
  '"BD-2-Clause"': 'BSD-2-Clause',
  'BEER': 'Beerware',
  'Beerware': 'Beerware',
  'Beer-Ware': 'Beerware',
  'BeerWare': 'Beerware',
  'BEERWARE': 'Beerware',
  'BFD': null,
  'Binarik': null,
  'BLT': null,
  'Boost': 'Boost',
  'BOOST': 'Boost',
  'Boost Software License v1.0': null,
  'BS3 3-Clause': null,
  'BSC': null,
  'BSD 1.0': null,
  'BSD-212': null,
  'BSD 2-clause': 'BSD-2-Clause',
  'BSD-2-clause': 'BSD-2-Clause',
  '"BSD-2-Clause"': 'BSD-2-Clause',
  'BSD 2-Clause': 'BSD-2-Clause',
  'BSD-2 Clause': 'BSD-2-Clause',
  'BSD 2-Clause license': 'BSD-2-Clause',
  '(BSD-2-Clause) MIT': null,
  'BSD-2-Clauseno': 'BSD-2-Clause',
  'BSD2-License': 'BSD-2-Clause',
  'BSD-2': null,
  'BSD2': null,
  'BSD 3': 'BSD-3-Clause',
  'BSD-3': 'BSD-3-Clause',
  'BSD3': 'BSD-3-Clause',
  'BSD-3-Claude': 'BSD-3-Clause',
  'BSD 3-clause': 'BSD-3-Clause',
  ' BSD-3-Clause': 'BSD-3-Clause',
  'BSD 3 Clause': 'BSD-3-Clause',
  'BSD 3-Clause': 'BSD-3-Clause',
  'BSD-3 Clause': 'BSD-3-Clause',
  'BSD3-Clause': 'BSD-3-Clause',
  'BSD clause 3': 'BSD-3-Clause',
  'BSD / GPL': null,
  'BSD license': null,
  'BSD-like': null,
  '(BSD) MIT': null,
  '(BSD)MIT': null,
  'BSD, MIT, WTFPL, CC-BY, pick what you prefer': null,
  'BSD New': null,
  'Bsd': null,
  '"BSD" ': null,
  '"BSD"': null,
  '(BSD)': null,
  'B.S.D': null,
  'BSD': null,
  'BSD*': null,
  'BSD, See License.txt for details': null,
  'BSD Simplified': null,
  'BSOD': null,
  'Budong': null,
  'CC0 1.0': null,
  'CC0 1.0 Universal License': null,
  'CC0 1.0 Universal': null,
  'Cc0': null,
  'CC-0': null,
  'CC0': null,
  'CC 1.0': null,
  'CC3.0': null,
  'CC3': null,
  'CC 4.0': null,
  'Cc-by-3.0': null,
  'CC BY 3.0': null,
  'CC-BY 3.0': null,
  'CC-BY 4.0 International': null,
  'CC BY 4.0': null,
  'CC BY-NC 3.0 (http://creativecommons.org/licenses/by-nc/3.0/)': null,
  'CC BY-NC 3.0': null,
  'CC BY-NC 4.0': null,
  'CC BY-NC-ND 4.0': null,
  'CC BY-NC': null,
  'CC BY-NC-SA 3.0': null,
  'CC BY-NC-SA': null,
  'CC-BY-NC-SA': null,
  'CC-BY-ND': null,
  'CC BY': null,
  'CC-BY': null,
  'CC BY-SA 2.0': null,
  'CC BY-SA 3.0': null,
  'CC BY-SA 4.0': null,
  'CC-BY-SA 4.0': null,
  'CC-BY-SA': null,
  'Cc-nc-nd-4.0': null,
  'CC-NC': null,
  'CC': null,
  'CC-SA-BY-3.0': null,
  'CDDL': null,
  'Cecill-B (french BSD-like)': null,
  'CeCILL': null,
  'CHAI': null,
  'ChengQianLicense': null,
  'Classic': null,
  'Closed': null,
  'CluedIn': null,
  'Coffeeware <https://github.com/Jmlevick/coffeeware-license>': null,
  'Commercial': null,
  'Commercial open source': null,
  'Concurix': null,
  'Copyleft': null,
  'Copyright 2013-2014 Alex Schenkel': null,
  'Copyright 2014 MeZine Inc.': null,
  'Copyright 2014 uh-sem-blee, Co.': null,
  'Copyright © 2015 Chloi Inc.': null,
  'Copyright 2015 UMyProto Team': null,
  'Copyright (c) 2012, Takashi Toyoshima <toyoshim@gmail.com>': null,
  'Copyright (c) 2014 FeedHenry Ltd, All Rights Reserved.': null,
  'COPYRIGHT (c) 2014 TrackJS LLC ALL RIGHTS RESERVED': null,
  'Copyright (c) 2015 FeedHenry Ltd, All Rights Reserved.': null,
  'Copyright Centiq Ltd': null,
  'Copyright (c) Sematext Group, Inc.': null,
  'Copyright LeanKit 2014': null,
  'Copyright': null,
  'CopyRight': null,
  'Copyright nuno job': null,
  'Copyright Oracle': null,
  'Copyright Tabcorp Pty Ltd 2013': null,
  'Copyright TabCorp Pty Ltd 2013': null,
  'Copyright Tabcorp Pty Ltd 2014': null,
  'Cosmasmallya@rocketmail.com': null,
  'CPAL-1.0 or http://strongloop.com/license': null,
  'CPAL': null,
  'CRAPL': null,
  'Creative Commons Attribution 4.0 International License': null,
  'Creative Commons Attribution-NoDerivatives 4.0 International License.': null,
  'Creative Commons Attribution-NonCommercial 4.0 International License': null,
  'Creative Commons Attribution-Noncommercial-No Derivative Works 3.0': null,
  'Creative Commons Attribution Non-Commercial Share Alike': null,
  'Creative Commons Attribution-ShareAlike 3.0': null,
  'Creative Commons BY-NC-SA License 3.0': null,
  'Creative Commons (by SA) 2.5': null,
  'Creative Commons License 2.5': null,
  'Creative Commons, MIT': null,
  'Creative Commons': null,
  'Creative-Commons Share-Alike Attribution License': null,
  'Creative Commons v4.0': null,
  'Crowley Licence 1.0, see included LICENCE.txt': null,
  'CSC': null,
  'Custom': null,
  'DAFUQ': null,
  'DBAD': null,
  'DBJ': null,
  'Declaration of Independence': null,
  'Dev': null,
  'D': null,
  'Dojo': null,
  'Done': null,
  'Dontcare': null,
  'Don\'t care what you do with it': null,
  'Don\'t read software licenses. Don\'t write software licenses.': null,
  'Do whatever you want with it.': null,
  'Do what the fuck you want to public license': null,
  'Do what you want. Anything goes. The web will keep track.': null,
  'Dual BSD/GPL': null,
  'Dual-licenced with The GNU Lesser General Public License, version 2.1 (LGPL-2.1) and version 3.0': null,
  'Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.': null,
  'Dual licensed under the MIT or GPL Version 2 licenses.': null,
  'Dual MIT & Beerware': null,
  'Duck': null,
  'DWTFYW License': 'WTFPL',
  'DWTFYWPL': 'WTFPL',
  'DWTFYW': 'WTFPL',
  'EAPM': null,
  'Eclipse': null,
  'Eclipse Public License 1.0': null,
  'Eclipse Public License + Eclipse Distribution License': null,
  'Eclipse Public License, Eclipse Distribution License': null,
  'Eclipse Public License (EPL)': null,
  'Eclipse Public License': null,
  'ECMA': null,
  'Ee': null,
  'Emao-fe': null,
  'En Tramite': null,
  'E': null,
  'EPL (Eclipse Public License)': null,
  'EPL+EDL': null,
  'EPL': null,
  'Fair License': null,
  'FDL-1.3': null,
  'F': null,
  'Follow compass\'': null,
  'For licensing, see LICENSE.md or http://ckeditor.com/license.': null,
  'FPL': null,
  'FreeBSD': null,
  'Free for any use': null,
  'Free for non-commercial use': null,
  'Freemium': null,
  'Free': null,
  'FREE': null,
  'Free Open Source': null,
  'Free to all users': null,
  'Free to use': null,
  'Freeware': null,
  'Fuck': null,
  'Gasgasgas': null,
  'Git-Commit': null,
  'GIT': null,
  'GLP': null,
  'GLPv3': null,
  'GNE (use for Good Not Evil)': null,
  'GNU-2': null,
  'GNU Affero GPL 3.0': null,
  'GNU Affero GPLv3': null,
  'GNU-AGPL-3.0': null,
  'GNU General Public License': null,
  'GNU GENERAL PUBLIC LICENSE': null,
  'GNU General Public License v2.0': null,
  'GNU General Public License v3': null,
  'GNU GENERAL PUBLIC LICENSE Version 2, June 1991': null,
  'GNU General Public License, version 2': null,
  'GNU GENERAL PUBLIC LICENSE Version 2': null,
  'GNU General Public': null,
  'GNU-GL-2': null,
  'GNU GLP v3.0': null,
  'GNU GPL 3.0': null,
  'GNU GPL 3': null,
  'GNU GPL': null,
  'GNU-GPL': null,
  'GNU/GPL': null,
  'GNU GPL v2.0': null,
  'GNU GPL v2': null,
  'GNU GPLv2': null,
  'GNU/GPLv2': null,
  'GNU GPL V2': null,
  'GNU GPL v3.0': null,
  'GNU GPL V3.0': null,
  'GNU GPL v3': null,
  'GNU GPLv3': null,
  'GNU GPLv3+': null,
  'GNU GPL ver 3': null,
  'GNU LESSER GENERAL PUBLIC LICENSE': null,
  'GNU LGPL v3.0': null,
  'GNU License v3': null,
  'GNU': null,
  'GnuPG': 'GPL-2.0',
  'Gnu public license v2.0': 'GPL-2.0',
  'GNU v2': 'GPL-2.0',
  'GNU v2+, MIT': 'GPL-2.0',
  'GNU V3': 'GPL-2.0',
  'Gpl-2.0': 'GPL-2.0',
  'GPL 2.0': 'GPL-2.0',
  'GPL-2.0-': 'GPL-2.0',
  'Gpl2': 'GPL-2.0',
  'GPL 2': 'GPL-2.0',
  'GPL-2': 'GPL-2.0',
  'GPL2': 'GPL-2.0',
  'GPL2+': 'GPL-2.0',
  'Gpl-3.0': 'GPL-3.0',
  ' GPL-3.0+': 'GPL-3.0',
  'GPL 3.0': 'GPL-3.0',
  'GPL3.0': 'GPL-3.0',
  'GPL3.0+': 'GPL-3.0',
  'GPL 3': 'GPL-3.0',
  'GPL-3': 'GPL-3.0',
  'GPL3': 'GPL-3.0',
  'GPL-3, MIT': null,
  'GPL, Apache 2.0': null,
  'GPL, Apache': null,
  'Gpl': 'GPL-3.0',
  'GPL': 'GPL-3.0',
  'Gpl-mit': null,
  'GPL/MIT': null,
  'GPL v2-3 & MIT': null,
  'GPLv2/LGPL': null,
  'GPL v.2': null,
  'GPL v2': null,
  'GPLv2': null,
  'GPLv2+': null,
  'GPL V2': null,
  'GPLV2': null,
  'GPLv2 or later': null,
  'GPL v3.0': null,
  'GPLv3.0': null,
  'GPL V3.0': null,
  'Gpl v3': null,
  'GPL v3': null,
  'GPL v3+': null,
  'GPLv3': null,
  'GPLv3+': null,
  'GPL V3': null,
  'GPL-V3': null,
  'GPLV3': null,
  'GPLv3 or later': null,
  'GPL Version 3': null,
  'GPv2': null,
  'GPVv2': null,
  'GUN': null,
  'Haguo': null,
  'Hello Kitty': null,
  'Hello world': null,
  'Http://abletech.github.com/neat-complete/doc/LICENSE.md.html': null,
  'Http://appverse.org/legal/appverse-license/': null,
  'Http://bpmn.io/license': null,
  'Http://clkao.mit-license.org': null,
  'Http://creativecommons.org/licenses/by-nc-sa/4.0/': null,
  'Http://geraintluff.github.io/tv4/LICENSE.txt': null,
  'Http://jchartfx.com/eula/': null,
  'Http://kitak.mit-license.org/': null,
  'Http://mariusrunge.com/mit-licence.html': null,
  'Http://mit-license.org/luizbills': null,
  'Http://opensource.org/licenses/MIT': null,
  'Http://ricardo.mit-license.org/': null,
  'Https://creativecommons.org/licenses/by-nc-sa/3.0/us/': null,
  'Https://github.com/charltoons/braintree.js/blob/master/LICENSE': null,
  'Https://github.com/cloud-fe/wowbuilder/blob/master/LICENSE': null,
  'Https://github.com/FezVrasta/bootstrap-material-design/blob/master/LICENSE.md': null,
  'Https://github.com/iclanzan/jassi': null,
  'Https://github.com/johnhof/KError/blob/master/LICENSE': null,
  'Https://github.com/kjirou/log-filter/blob/master/LICENSE': null,
  'Https://github.com/kjirou/parry/blob/master/LICENSE': null,
  'Https://github.com/kjirou/parry-mongoose/blob/master/LICENSE': null,
  'Https://github.com/lujintan/clitoolkit/blob/master/LICENSE': null,
  'Https://github.com/lujintan/filefactory/blob/master/LICENSE': null,
  'Https://github.com/lujintan/fs-enhance/blob/master/LICENSE': null,
  'Https://github.com/lujintan/sherrie/blob/master/LICENSE': null,
  'Https://github.com/lujintan/sherrie-cmd-fis/blob/master/LICENSE': null,
  'Https://github.com/lujintan/sherrie-cmd-scaffold/blob/master/LICENSE': null,
  'Https://github.com/mapbox/gridmonger/blob/master/LICENSE.txt': null,
  'Https://github.com/shockwork/bootstrap-material-design-sass/blob/master/LICENSE.md': null,
  'Https://github.com/sourcejs/sourcejs-specs-linting/blob/master/LICENSE': null,
  'Https://github.com/UPPERCASEIO/UPPERCASE.IO/blob/master/LICENSE': null,
  'Https://github.com/UPPERCASEIO/UPPERCASE.JS/blob/master/LICENSE': null,
  'Https://github.com/yunheli/findIp/new/master?filename=LICENSE.md': null,
  'Https://github.com/yunheli/node-calender/new/master?filename=LICENSE.md': null,
  'Https://raw.github.com/ohmed/ImEx.js/master/LICENSE': null,
  'Http://towry.mit-license.org/': null,
  'Http://unlicense.org/': null,
  'Http://unlicense.org': null,
  'Http://wtfpl.org/': null,
  'Http://www.apache.org/licenses/LICENSE-2.0': null,
  'Http://www.featureblend.com/license.txt': null,
  'Http://www.jqwidgets.com/license/': null,
  'Http://www.lixiucheng.com': null,
  'Http://www.mozilla.org/MPL/2.0/': null,
  'Http://www.opensource.org/licenses/MIT': null,
  'Hubbard Radio, LLC': null,
  'Hw': null,
  'IBM': null,
  'I can only be temporarily owned!': null,
  'ICS': null,
  'ICU4J': null,
  'IDK': null,
  'Intelisis': null,
  'Irof Licence Version 0.0001': null,
  'ISB': null,
  'ISC / BSD-2-Clause': null,
  'ISC / GPL / MIT': null,
  'ISC / GPL': null,
  'Isc': null,
  'ISD': null,
  'IST': null,
  'IVS': null,
  'Jerryjc': null,
  'Jetaime_mk108@yahoo.com': null,
  'JkgINC': null,
  'Jnvfkje ke ': null,
  'JSON License (Modified MIT)': null,
  'Kingman License': null,
  'KingSam': null,
  '(K)': null,
  'KOC': null,
  'Koolearn.com': null,
  'Kopimist': null,
  'Lacosta': null,
  'Lai': null,
  'Laskjdf ': null,
  'Leng': null,
  'Lexhamenglishbible.com/license': null,
  'LGLP3': null,
  'LGPL 2.1': null,
  'LGPL2.1': null,
  'LGPL-2': null,
  'LGPL2': null,
  'LGPL 3.0': null,
  'LGPL3.0': null,
  'LGPL 3': null,
  'LGPL-3': null,
  'LGPL3': null,
  'LGPL3+': null,
  'LGPL 3 or later': null,
  'LGPL/EPL': null,
  '(LGPL)': null,
  'LGPL:': null,
  'LGPL': null,
  'LGPLv2.1': null,
  'LGPL v2': null,
  'LGPLv2': null,
  'LGPL v3': null,
  'LGPL.v3': null,
  'LGPLv3': null,
  'LGPLv3+': null,
  'LGPL Version 3.0': null,
  'LGPLvTBD': null,
  'Licence Public Rien À Branler': null,
  'LICENSE-2.0.txt': null,
  '{"license": "GPL-3.0"}': null,
  'L I C E N S E M E B O Y S': null,
  'LICENSE-MIT': null,
  './LICENSE': null,
  'LICENSE': null,
  'Licenses/GPL-3.0': null,
  'License.txt': null,
  'LICESE': null,
  'Lllllllll': null,
  'LOVE': null,
  'Martiniware': null,
  'Marviq': null,
  'Mersenne Twister': null,
  'Microsoft Office Extensible File License': null,
  'Microsoft Pre-Release Software': null,
  'Microsoft Public License (Ms-PL)': null,
  'MID': null,
  'Mine.': null,
  'Minimist': null,
  'MIN': null,
  'MIS': null,
  'MIT 1.0': null,
  'MIT2': null,
  'MIT and LGPL': null,
  'MIT/Apache 2.0': null,
  'MIT/APACHE': null,
  'MIT BSD MOUSE': null,
  'MIT & CC3': null,
  'MIT / CC-BY-SA 3.0': null,
  'MIT @chetandhembre': null,
  'MIT, Copyright (c) 2013 Michael Schoonmaker': null,
  'MIT Copyright (c) 2015 Austin Eldridge': null,
  'MIT, EPL': null,
  'MIT Expat License': null,
  'MIT Expat': null,
  'MIT-Expat': null,
  'MIT, GNU General Public License Version 2': null,
  'MIT / GPL-2.0+': null,
  'MIT, GPL 2.0+': null,
  'MIT & GPL': null,
  'MIT/GPL': null,
  'MIT/GPLv2': null,
  'MIT <http://bankfacil.mit-license.org>': null,
  'MIT (http://mootools.net/license.txt)': null,
  'MIT <http://opensource.org/licenses/MIT>': null,
  'MIT, http://opensource.org/licenses/MIT': null,
  'MIT / http://rem.mit-license.org': null,
  'MIT (https://github.com/AlekseyLeshko/say-me/blob/master/LICENSE)': null,
  'MIT (https://github.com/AlekseyLeshko/testimonial.js/blob/master/LICENSE)': null,
  'MIT (https://github.com/brentertz/scapegoat/blob/master/LICENSE-MIT)': null,
  'MIT / http://www.highcharts.com/license/': null,
  'MIT <http://www.opensource.org/licenses/mit-license.php>': null,
  'MITISC': null,
  'MIT licence': null,
  'MIT Licence': null,
  'MIT License. Copyright First Rally. All rights reserved.': null,
  'MIT Licensed. http://www.opensource.org/licenses/mit-license.php': null,
  'MIT License - http://opensource.org/licenses/MIT': null,
  'MIT License (http://opensource.org/licenses/MIT)': null,
  'MIT License, http://www.opensource.org/licenses/MIT': null,
  'MIT license (MIT)': null,
  'MIT License (MIT)': null,
  'MIT license': null,
  'MIT License.': null,
  'MIT License': null,
  'MIT_License': null,
  'MIT-License': null,
  'MIT LICENSE': null,
  'MIT-LICENSE': null,
  'MIT License, see LICENSE.md for details': null,
  'MIT-like': null,
  'MIT Lisence': null,
  'mit':'MIT',
  'Mit': 'MIT',
  'MiT': 'MIT',
  '"MIT"': 'MIT',
  '(MIT)': 'MIT',
  'M.I.T.': 'MIT',
  'M.I.T': 'MIT',
  'MIT ': 'MIT',
  'MIT]': 'MIT',
  'MİT': 'MIT',
  'Mit +no-false-attribs, +no-advertising license': null,
  'MIT +no-false-attribs, +no-advertising License': null,
  'MIT +no-false-attribs': null,
  'MIT or Boost Software License': null,
  'MIT or GPL v2': null,
  'MIT or GPLv3': null,
  'MIT or LGPL (your choice)': null,
  'MIT (ricardo.mit-license.org)': null,
  'MIT-Style': null,
  'MITt': null,
  'MIT/X11': 'MIT',
  'MIT/X': null,
  'Mixed': null,
  'MIY': null,
  'MMIT': null,
  'Modified BSD License (BSD 3-clause)': null,
  'Modified BSD License': null,
  'Modified MIT': null,
  'MonetDB License, https://www.monetdb.org/Legal/MonetDBLicense': null,
  'Mother\'s Tits': null,
  'MOXA': null,
  'Mozilla Public Licence version 2': null,
  'Mozilla Public License 1.1': null,
  'Mozilla Public License 2.0': null,
  'Mozilla Public License': null,
  'Mozilla Public License, v. 2.0': null,
  'Mozilla Public License, version 2.0': null,
  'MPL 2.0':'MPL-2.0',
  'MPL/2.0': null,
  'MPL2.0': null,
  'MPL 2': null,
  'MPL-2': null,
  'MPL2': null,
  'MPL, GPL': null,
  'MPL': null,
  'MPL v2.0': null,
  'MPLv2.0': null,
  'MPL v2': null,
  'MPLv2': null,
  'MPL V2': null,
  'MPLV2': null,
  'MSFT MIT-like': null,
  'MTC': null,
  'MTIIT': null,
  'MTI': null,
  'Mtk': null,
  'MTL': null,
  'MT': null,
  'N/a': null,
  'Na': null,
  'N/A': null,
  'NAVER': null,
  'NET-EASE': null,
  'New BSD License': null,
  'New BSD': null,
  'N': null,
  'Node': null,
  'No license': null,
  'No License': null,
  'No Licens': null,
  '(none)': null,
  'None': null,
  'NONE': null,
  'None (public domain)': null,
  'Non Free': null,
  'No': null,
  'NO': null,
  'Nope': null,
  'Noramsoft': null,
  '??': null,
  '""': null,
  'Null': null,
  'NULL': null,
  'NYSL, BSD-3-Clause': null,
  'OC': null,
  'ODBL': null,
  'OGL': null,
  'Open': null,
  'Open Source License': null,
  'OpenSource': null,
  'OSS': null,
  'OWL': null,
  'PD': null,
  'Pending': null,
  'Pera': null,
  'Per-audio file basis (see README.md)': null,
  ' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: ': null,
  'PHP 3.01': null,
  'Private': null,
  'PRIVATE': null,
  'Private, Totem Labs LLC all rights reserved.': null,
  'Private, Totem LLC all rights reserved.': null,
  'PR': null,
  'Property of Josh Vanderwillik': null,
  'Propriatry': null,
  'Proprietary / Closed Source': null,
  'Proprietary': null,
  'Public Domain (CC0)': null,
  'Public Domain. CC0 where applicable.': null,
  'Public domain': null,
  'Public Domain': null,
  'PUBLIC DOMAIN': null,
  'Public domain, Open Game License': null,
  'Public domain or CC0': null,
  'Public domain(unlicense)': null,
  'Public-domain (Unlicense)': null,
  'Public Domain <Unlicense>': null,
  'Public Domain (Unlicense)': null,
  'Public Domain (UNLISCENSE)': null,
  'Public': null,
  'PUBLIC': null,
  'Puclic Domain, CC0 (http://creativecommons.org/about/pdm)': null,
  'Qwe': null,
  '"report error message with badjs"': null,
  'Research License 1.0': null,
  'Ricardo.mit-license.org': null,
  'RTE': null,
  'Same as https://github.com/mikeal/node.couchapp.js': null,
  'Sanpi': null,
  'Sblgnt.com/license': null,
  'See https://github.com/cometd/cometd/tree/master/LICENSES': null,
  'See license file': null,
  'See License File': null,
  'See LICENSE': null,
  'See license.txt': null,
  'Sigma': null,
  'SIL': null,
  'SIL OFL 1.1, MIT': null,
  'SIL Open Font License, 1.1': null,
  'Simple': null,
  'Simplified BSD-3': null,
  'Simplified BSD License': null,
  'Sitecore': null,
  'SK C&C': null,
  'SMPPL': null,
  'SNL': null,
  'S': null,
  'Something about RSA with coolpad': null,
  'Sonots Public License': null,
  'Spotify Internal': null,
  'Standard 3-clause BSD': null,
  'Standard Improved BSD License': null,
  'Steele Nelson': null,
  'StrongLoop License Agreement': null,
  'Substanceware': null,
  'Talk to the Legal Department': null,
  'Talk to the legal department or ask me and I\'ll get this sorted': null,
  'TBC': null,
  'TBD': null,
  'TeamMentor Commercial License': null,
  'Telerik': null,
  'Test1': null,
  'Test': null,
  'TEST': null,
  ' The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. ': null,
  'The Artistic License 2.0': null,
  'THE BEER-WARE LICENSE': null,
  'THE BEER-WARE LICENSE (Revision 42) ': null,
  '/* The MIT License (MIT) ': null,
  'The MIT License (MIT)': null,
  'The MIT License': null,
  'THE MIT Lincense': null,
  ' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */': null,
  'The Unlicense': null,
  'Tidepool': null,
  'TMI': null,
  'TODO': null,
  'To me': null,
  'To milk': null,
  'To rock': null,
  'To use or fork, Apache License, Version 2.0. To contribute back, Dojo CLA': null,
  'To Use: WTFPL, To Contribute: Dojo CLA': null,
  'Trial': null,
  'Tridium Open Source License': null,
  'TRON': null,
  'Trtr': null,
  'Type:gplv2 url:http://www.example.org/licenses/gpl.html': null,
  '[{"type":"huang@123.com"}]': null,
  'Undefined': null,
  'UNIT27-license': null,
  'Unknown': null,
  'Unlicence': 'Unlicense',
  'Unlicensed': 'Unlicense',
  'UNLICENSED': 'Unlicense',
  'Unlicense (http://unlicense.org/)': 'Unlicense',
  'Unlicense (see http://unlicense.org/)': 'Unlicense',
  'Unlicense': 'Unlicense',
  'UNLICENSE': 'Unlicense',
  'UNLICNSE': 'Unlicense',
  'Use as you please. Don\'t blame me.': null,
  'USE AT YOUR OWN RISK.': null,
  'Use: WTFPL, Contribute: Dojo CLA': null,
  'UTn': null,
  'Vky': null,
  'VOL': null,
  'Wahaha': null,
  'We': null,
  'WFTPL': null,
  'WFYBPL': null,
  'WGU': null,
  'WhateverYouWant Licencse': null,
  'WTFGPL': 'WTFPL',
  'WTFPL 2': 'WTFPL',
  'WTFPL / BSD-3-Clause / MIT / zlib': null,
  'WTFPL <http://www.wtfpl.net/>': 'WTFPL',
  'WTFPLv2': 'WTFPL',
  'Wtfpl': 'WTFPL',
  'Wtfpl (wtfpl.net)': 'WTFPLF',
  'WTF': 'WTFPL',
  'WTHPL v1.0.0': 'WTPLF',
  'Www.highcharts.com/license': null,
  'Wwww.baidu.com': null,
  'WYWTPL': null,
  'X03231': null,
  'X11 License': 'X11',
  'Xiaochen1101314': null,
  'Xia xie': null,
  'X.Net': null,
  'X': null,
  'Xxx': null,
  'XXX': null,
  'XYZ': null,
  'Yahoo BSD': null,
  'Yes': null,
  '@ystk_yrk & UNITED ARROWS LTD.': null,
  'Yxh': null,
  'YY': null,
  'Zlib/libpng': 'Zlib',
  'Zlib': 'Zlib',
  'ZLIB': 'Zlib',
  'ZX': null
};

test('examples', function(test) {
  Object.keys(examples)
    .forEach(function(input) {
      var corrected = examples[input];
      test.test(input, function(test) {
        test.equal(
          correct(input),
          corrected,
          'corrects "' + input + '" to "' + corrected
        );
        if (corrected !== null) {
          test.ok(
            spdx.valid(corrected),
            '"' + corrected + '" is a valid SPDX identifier'
          );
        }
        test.end();
      });
    });
  test.end();
});
