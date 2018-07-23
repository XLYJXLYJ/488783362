// gui.js

IDE_Morph.prototype.originalinit = IDE_Morph.prototype.init;
IDE_Morph.prototype.init = function (isAutoFill) {
    IDE_Morph.prototype.originalinit(isAutoFill);
    this.logoURL = this.resourceURL('manykit/manykit.png');
}

IDE_Morph.prototype.originalSetLanguage = IDE_Morph.prototype.setLanguage;
IDE_Morph.prototype.setLanguage = function (lang, callback) {
    var myself = this;

    myself.originalSetLanguage(lang, function () {
        myself.setLanguagePXFrame(lang, callback);
    });
};

IDE_Morph.prototype.setLanguagePXFrame = function (lang, callback) {
    // Load language script for s4a related functions
    var pxframeTranslation = document.getElementById('language'),
        s4aSrc = 'manykit/lang-' + lang + '.js',
        myself = this;
    if (pxframeTranslation) {
        document.head.removeChild(pxframeTranslation);
    }
    if (lang === 'en') {
        return this.reflectLanguage('en', callback);
    }
    pxframeTranslation = document.createElement('script');
    pxframeTranslation.id = 'language';
    pxframeTranslation.onload = function () {
        myself.reflectLanguage(lang, callback);
    };
    document.head.appendChild(pxframeTranslation);
    pxframeTranslation.src = s4aSrc;
};

IDE_Morph.prototype.originalNewProject = IDE_Morph.prototype.newProject
IDE_Morph.prototype.newProject = function () {
    // Disconnect each sprite before creating the new project
    var sprites = this.sprites.asArray()
    sprites.forEach(function (sprite) {
        if (sprite.pxframe) {
            sprite.pxframe.disconnect(true);
        }
    });
    this.originalNewProject();
};


IDE_Morph.prototype.exportProject_MANYKIT= function (name, plain) {
    // Export project XML, saving a file to disk
    // newWindow requests displaying the project in a new tab.
    var menu, str, dataPrefix;

    if (name) {
        this.setProjectName(name);
        dataPrefix = 'data:text/' + plain ? 'plain,' : 'xml,';
        try {
            menu = this.showMessage('');
            str = this.serializer.serialize(this.stage);
            // this.setURL('#open:' + dataPrefix + encodeURIComponent(str));
            // this.saveXMLAs(str, name);
            // menu.destroy();
            // this.showMessage('Exported!', 1);
            return str
        } catch (err) {
            if (Process.prototype.isCatchingErrors) {
                this.showMessage('Export failed: ' + err);
            } else {
                throw err;
            }
        }
    }
};






IDE_Morph.prototype.openIn = function (world) {
    var hash, myself = this, urlLanguage = null;
    var projectData;
    SnapCloud.initSession(
        function (username) {
            if (username) {
                myself.source = 'cloud';
                if (!SnapCloud.verified) {
                        new DialogBoxMorph().inform(
                            'Unverified account',
                            'Your account is still unverified.\n' +
                            'Please use the verification link that\n' +
                            'was sent to your email address when you\n' +
                            'signed up.\n\n' +
                            'If you cannot find that email, please\n' +
                            'check your spam folder. If you still\n' +
                            'cannot find it, please use the "Resend\n' +
                            'Verification Email..." option in the cloud\n' +
                            'menu.',
                            world,
                            myself.cloudIcon(null, new Color(0, 180, 0))
                        );
                }
            }
        }
    );

    this.buildPanes();
    world.add(this);
    world.userMenu = this.userMenu;

    // override SnapCloud's user message with Morphic
    SnapCloud.message = function (string) {
        var m = new MenuMorph(null, string),
            intervalHandle;
        m.popUpCenteredInWorld(world);
        intervalHandle = setInterval(function () {
            m.destroy();
            clearInterval(intervalHandle);
        }, 2000);
    };

    // prevent non-DialogBoxMorphs from being dropped
    // onto the World in user-mode
    world.reactToDropOf = function (morph) {
        if (!(morph instanceof DialogBoxMorph ||
        		(morph instanceof MenuMorph))) {
            if (world.hand.grabOrigin) {
                morph.slideBackTo(world.hand.grabOrigin);
            } else {
                world.hand.grab(morph);
            }
        }
    };

    this.reactToWorldResize(world.bounds);

    function getURL(url) {
        try {
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.send();
            if (request.status === 200) {
                return request.responseText;
            }
            throw new Error('unable to retrieve ' + url);
        } catch (err) {
            myself.showMessage('unable to retrieve project');
            return '';
        }
    }

    function applyFlags(dict) {
        if (dict.embedMode) {
            myself.setEmbedMode();
        }
        if (dict.editMode) {
            myself.toggleAppMode(false);
        } else {
            myself.toggleAppMode(true);
        }
        if (!dict.noRun) {
            myself.runScripts();
        }
        if (dict.hideControls) {
            myself.controlBar.hide();
            window.onbeforeunload = nop;
        }
        if (dict.noExitWarning) {
            window.onbeforeunload = nop;
        }
    }

    // dynamic notifications from non-source text files
    // has some issues, commented out for now
    /*
    this.cloudMsg = getURL('http://snap.berkeley.edu/cloudmsg.txt');
    motd = getURL('http://snap.berkeley.edu/motd.txt');
    if (motd) {
        this.inform('Snap!', motd);
    }
    */

    function interpretUrlAnchors() {
        var dict, idx;

        if (location.hash.substr(0, 6) === '#open:') {
            hash = location.hash.substr(6);
            if (hash.charAt(0) === '%'
                    || hash.search(/\%(?:[0-9a-f]{2})/i) > -1) {
                hash = decodeURIComponent(hash);
            }
            if (contains(
                    ['project', 'blocks', 'sprites', 'snapdata'].map(
                        function (each) {
                            return hash.substr(0, 8).indexOf(each);
                        }
                    ),
                    1
                )) {
                this.droppedText(hash);
            } else {
                this.droppedText(getURL(hash));
            }
        } else if (location.hash.substr(0, 5) === '#run:') {
            hash = location.hash.substr(5);
            idx = hash.indexOf("&");
            if (idx > 0) {
                hash = hash.slice(0, idx);
            }
            if (hash.charAt(0) === '%'
                    || hash.search(/\%(?:[0-9a-f]{2})/i) > -1) {
                hash = decodeURIComponent(hash);
            }
            if (hash.substr(0, 8) === '<project>') {
                this.rawOpenProjectString(hash);
            } else {
                this.rawOpenProjectString(getURL(hash));
            }
            applyFlags(SnapCloud.parseDict(location.hash.substr(5)));
        } else if (location.hash.substr(0, 9) === '#present:') {
            this.shield = new Morph();
            this.shield.color = this.color;
            this.shield.setExtent(this.parent.extent());
            this.parent.add(this.shield);
            // myself.showMessage('Fetching project\nfrom the cloud...');
            var demoxml
            var demouser
            // demoxml = location.hash.substr(36, 5)
            // $('#demoxml').html(1);
            demoxml = location.hash.substr(36, 5)
            demouser = location.hash.substr(18, 5)
            axios.post('/res/getfile',{
                userid:demouser,
                id:demoxml,
                state:3
            })
            .then(function(response) { 
                var namexml = response.data.data.name;
                var titlexml = response.data.data.title;
                $("#demouser").html(namexml);
                $("#demoxml").html(titlexml);
            })

            var playerresultxml = new Promise((resolve,reject) =>{
                axios.post('/res/getfile',{
                    id:demoxml,
                })
                .then(function(response) { 
                    resolve(response.data)
                    // console.log(response.data)
                })
            });
            playerresultxml.then(function (projectData) {
                var msg;

                // alert(projectData)
                myself.nextSteps([
                    function () {
                        msg = myself.showMessage('Opening project...');
                    },
                    function () {nop(); }, // yield (bug in Chrome)
                    function () {
                        if (projectData.indexOf('<snapdata') === 0) {
                            myself.rawOpenCloudDataString(projectData);
                        } else if (
                            projectData.indexOf('<project') === 0
                        ) {
                            myself.rawOpenProjectString(projectData);
                        }
                        myself.hasChangedMedia = true;
                        myself.toggleAppMode(true)
                    },
                    function () {
                        myself.shield.destroy();
                        myself.shield = null;
                        msg.destroy();
                        applyFlags(dict);
                    }
                ]);
            }
        ) 

            // axios.post('/res/getfile',{
            //     id:sessionStorage.id,
            //     id:11576,
            // })
            // .then(response => {  
            //     alert('成功了')                        
            //    var projectData = response.data  
            //    console.log('1111111'+projectData)  
            //    myself.rawOpenProjectString(projectData);
            // })

            // console.log('22222'+projectData)  
            // make sure to lowercase the username
            // dict = SnapCloud.parseDict(location.hash.substr(9));
            // dict.Username = dict.Username.toLowerCase();

            // SnapCloud.getPublicProject(
                // dict.ProjectName,
                // dict.Username,
            //     function (projectData) {
            //         var msg;
            //         alert(projectData)
            //         myself.nextSteps([
            //             function () {
            //                 msg = myself.showMessage('Opening project...');
            //             },
            //             function () {nop(); }, // yield (bug in Chrome)
            //             function () {
            //                 if (projectData.indexOf('<snapdata') === 0) {
            //                     myself.rawOpenCloudDataString(projectData);
            //                 } else if (
            //                     projectData.indexOf('<project') === 0
            //                 ) {
            //                     myself.rawOpenProjectString(projectData);
            //                 }
            //                 myself.hasChangedMedia = true;
            //             },
            //             function () {
            //                 myself.shield.destroy();
            //                 myself.shield = null;
            //                 msg.destroy();
            //                 applyFlags(dict);
            //             }
            //         ]);
            //     },
            //     this.cloudError()
            // );
        } else if (location.hash.substr(0, 7) === '#cloud:') {
            this.shield = new Morph();
            this.shield.alpha = 0;
            this.shield.setExtent(this.parent.extent());
            this.parent.add(this.shield);
            myself.showMessage('Fetching project\nfrom the cloud...');

            // make sure to lowercase the username
            dict = SnapCloud.parseDict(location.hash.substr(7));

            SnapCloud.getPublicProject(
                dict.ProjectName,
                dict.Username,
                function (projectData) {
                    var msg;
                    myself.nextSteps([
                        function () {
                            msg = myself.showMessage('Opening project...');
                        },
                        function () {nop(); }, // yield (bug in Chrome)
                        function () {
                            if (projectData.indexOf('<snapdata') === 0) {
                                myself.rawOpenCloudDataString(projectData);
                            } else if (
                                projectData.indexOf('<project') === 0
                            ) {
                                myself.rawOpenProjectString(projectData);
                            }
                            myself.hasChangedMedia = true;
                        },
                        function () {
                            myself.shield.destroy();
                            myself.shield = null;
                            msg.destroy();
                            myself.toggleAppMode(false);
                        }
                    ]);
                },
                this.cloudError()
            );
        } else if (location.hash.substr(0, 4) === '#dl:') {
            myself.showMessage('Fetching project\nfrom the cloud...');

            // make sure to lowercase the username
            dict = SnapCloud.parseDict(location.hash.substr(4));
            dict.Username = dict.Username.toLowerCase();

            SnapCloud.getPublicProject(
                dict.ProjectName,
                dict.Username,
                function (projectData) {
                	myself.saveXMLAs(projectData, dict.ProjectName);
                 	myself.showMessage(
                  	   'Saved project\n' + dict.ProjectName,
                      	2
                 	);
                },
                this.cloudError()
            );
        } else if (location.hash.substr(0, 6) === '#lang:') {
            urlLanguage = location.hash.substr(6);
            this.setLanguage(urlLanguage);
            this.loadNewProject = true;
        } else if (location.hash.substr(0, 7) === '#signup') {
            this.createCloudAccount();
        }
    this.loadNewProject = false;

    }

    if (this.userLanguage) {
        this.loadNewProject = true;
        this.setLanguage(this.userLanguage, interpretUrlAnchors);
    } else {
        interpretUrlAnchors.call(this);
    }
};