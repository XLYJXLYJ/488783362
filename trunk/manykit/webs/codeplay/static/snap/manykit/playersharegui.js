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

    // function applyFlags(dict) {
    //     if (dict.embedMode) {
    //         myself.setEmbedMode();
    //     }
    //     if (dict.editMode) {
    //         myself.toggleAppMode(false);
    //     } else {
    //         myself.toggleAppMode(true);
    //     }
    //     if (!dict.noRun) {
    //         myself.runScripts();
    //     }
    //     if (dict.hideControls) {
    //         myself.controlBar.hide();
    //         window.onbeforeunload = nop;
    //     }
    //     if (dict.noExitWarning) {
    //         window.onbeforeunload = nop;
    //     }
    // }

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
                document.getElementById("demouser").innerHTML=namexml;
                document.getElementById("demoxml").innerHTML=titlexml;
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
                        // applyFlags(dict);
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


//暂停播放
IDE_Morph.prototype.togglePauseResume = function () {
    if (this.stage.threads.isPaused()) {
        this.stage.threads.resumeAll(this.stage);
    } else {
        this.stage.threads.pauseAll(this.stage);
    }
    this.controlBar.pauseButton.refresh();
};


IDE_Morph.prototype.createControlBar = function () {
    // assumes the logo has already been created
    var padding = 5,
        button,
        slider,
        stopButton,
        pauseButton,
        startButton,
        projectButton,
        settingsButton,
        stageSizeButton,
        appModeButton,
        steppingButton,
        cloudButton,
        x,
        colors = [
            this.groupColor,
            this.frameColor.darker(50),
            this.frameColor.darker(50)
        ],
        myself = this;

    if (this.controlBar) {
        this.controlBar.destroy();
    }

    this.controlBar = new Morph();
    this.controlBar.color = this.frameColor;
    this.controlBar.setHeight(this.logo.height()); // height is fixed
    this.controlBar.mouseClickLeft = function () {
        this.world().fillPage();
    };
    this.add(this.controlBar);

    //smallStageButton
    button = new ToggleButtonMorph(
        null, //colors,
        myself, // the IDE is the target
        'toggleStageSize',
        [
            new SymbolMorph('smallStage', 14),
            new SymbolMorph('normalStage', 14)
        ],
        function () {  // query
            return myself.isSmallStage;
        }
    );

    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'stage size\nsmall & normal';
    button.fixLayout();
    button.refresh();
    stageSizeButton = button;
    this.controlBar.add(stageSizeButton);
    this.controlBar.stageSizeButton = button; // for refreshing

    //appModeButton
    button = new ToggleButtonMorph(
        null, //colors,
        myself, // the IDE is the target
        'toggleAppMode',
        [
            new SymbolMorph('fullScreen', 14),
            new SymbolMorph('normalScreen', 14)
        ],
        function () {  // query
            return myself.isAppMode;
        }
    );

    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'app & edit\nmodes';
    button.fixLayout();
    button.refresh();
    appModeButton = button;
    // this.controlBar.add(appModeButton);
    this.controlBar.appModeButton = appModeButton; // for refreshing

    //steppingButton
    button = new ToggleButtonMorph(
        null, //colors,
        myself, // the IDE is the target
        'toggleSingleStepping',
        [
            new SymbolMorph('footprints', 16),
            new SymbolMorph('footprints', 16)
        ],
        function () {  // query
            return Process.prototype.enableSingleStepping;
        }
    );

    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = new Color(153, 255, 213);
//    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    button.hint = 'Visible stepping';
    button.fixLayout();
    button.refresh();
    steppingButton = button;
    this.controlBar.add(steppingButton);
    this.controlBar.steppingButton = steppingButton; // for refreshing

    // stopButton
    button = new ToggleButtonMorph(
        null, // colors
        this, // the IDE is the target
        'stopAllScripts',
        [
            new SymbolMorph('octagon', 14),
            new SymbolMorph('square', 14)
        ],
        function () {  // query
            return myself.stage ?
                    myself.stage.enableCustomHatBlocks &&
                        myself.stage.threads.pauseCustomHatBlocks
                        : true;
        }
    );

    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = new Color(200, 0, 0);
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'stop\nevery-\nthing';
    button.fixLayout();
    button.refresh();
    stopButton = button;
    this.controlBar.add(stopButton);
    this.controlBar.stopButton = stopButton; // for refreshing

    //pauseButton
    button = new ToggleButtonMorph(
        null, //colors,
        this, // the IDE is the target
        'togglePauseResume',
        [
            new SymbolMorph('pause', 12),
            new SymbolMorph('pointRight', 14)
        ],
        function () {  // query
            return myself.isPaused();
        }
    );

    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = new Color(255, 220, 0);
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'pause/resume\nall scripts';
    button.fixLayout();
    button.refresh();
    pauseButton = button;
    this.controlBar.add(pauseButton);
    this.controlBar.pauseButton = pauseButton; // for refreshing

    // startButton
    button = new PushButtonMorph(
        this,
        'pressStart',
        new SymbolMorph('flag', 14)
    );
    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = new Color(0, 200, 0);
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'start green\nflag scripts';
    button.fixLayout();
    startButton = button;
    this.controlBar.add(startButton);
    this.controlBar.startButton = startButton;

    // steppingSlider
    slider = new SliderMorph(
        61,
        1,
        Process.prototype.flashTime * 100 + 1,
        6,
        'horizontal'
    );
    slider.action = function (num) {
        Process.prototype.flashTime = (num - 1) / 100;
        myself.controlBar.refreshResumeSymbol();
    };
    // slider.alpha = MorphicPreferences.isFlat ? 0.1 : 0.3;
    slider.color = new Color(153, 255, 213);
    slider.alpha = 0.3;
    slider.setExtent(new Point(50, 14));
    this.controlBar.add(slider);
    this.controlBar.steppingSlider = slider;

    // projectButton
    button = new PushButtonMorph(
        this,
        'projectMenu',
        new SymbolMorph('file', 14)
        //'\u270E'
    );
    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'open, save, & annotate project';
    button.fixLayout();
    projectButton = button;
    // this.controlBar.add(projectButton);//注释
    this.controlBar.projectButton = projectButton; // for menu positioning

    // settingsButton
    button = new PushButtonMorph(
        this,
        'settingsMenu',
        new SymbolMorph('gears', 14)
        //'\u2699'
    );
    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'edit settings';
    button.fixLayout();
    settingsButton = button;
    this.controlBar.add(settingsButton);
    this.controlBar.settingsButton = settingsButton; // for menu positioning

    // cloudButton
    button = new PushButtonMorph(
        this,
        'cloudMenu',
        new SymbolMorph('cloud', 11)
    );
    button.corner = 12;
    button.color = colors[0];
    button.highlightColor = colors[1];
    button.pressColor = colors[2];
    button.labelMinExtent = new Point(36, 18);
    button.padding = 0;
    button.labelShadowOffset = new Point(-1, -1);
    button.labelShadowColor = colors[1];
    button.labelColor = this.buttonLabelColor;
    button.contrast = this.buttonContrast;
    button.drawNew();
    // button.hint = 'cloud operations';
    button.fixLayout();
    cloudButton = button;
    // this.controlBar.add(cloudButton);//注释
    this.controlBar.cloudButton = cloudButton; // for menu positioning

    this.controlBar.fixLayout = function () {
        x = this.right() - padding;
        [stopButton, pauseButton, startButton].forEach(
            function (button) {
                button.setCenter(myself.controlBar.center());
                button.setRight(x);
                x -= button.width();
                x -= padding;
            }
        );

        x = Math.min(
            startButton.left() - (3 * padding + 2 * stageSizeButton.width()),
            myself.right() - StageMorph.prototype.dimensions.x *
                (myself.isSmallStage ? myself.stageRatio : 1)
        );
        [stageSizeButton, appModeButton].forEach(
            function (button) {
                x += padding;
                button.setCenter(myself.controlBar.center());
                button.setLeft(x);
                x += button.width();
            }
        );

        slider.setCenter(myself.controlBar.center());
        slider.setRight(stageSizeButton.left() - padding);

        steppingButton.setCenter(myself.controlBar.center());
        steppingButton.setRight(slider.left() - padding);

        settingsButton.setCenter(myself.controlBar.center());
        settingsButton.setLeft(this.left());

        cloudButton.setCenter(myself.controlBar.center());
        cloudButton.setRight(settingsButton.left() - padding);

        projectButton.setCenter(myself.controlBar.center());
        projectButton.setRight(cloudButton.left() - padding);

        this.refreshSlider();
        this.updateLabel();
    };

    this.controlBar.refreshSlider = function () {
        if (Process.prototype.enableSingleStepping && !myself.isAppMode) {
            slider.drawNew();
            slider.show();
        } else {
            slider.hide();
        }
        this.refreshResumeSymbol();
    };

    this.controlBar.refreshResumeSymbol = function () {
        var pauseSymbols;
        if (Process.prototype.enableSingleStepping &&
                Process.prototype.flashTime > 0.5) {
            myself.stage.threads.pauseAll(myself.stage);
            pauseSymbols = [
                new SymbolMorph('pause', 12),
                new SymbolMorph('stepForward', 14)
            ];
        } else {
            pauseSymbols = [
                new SymbolMorph('pause', 12),
                new SymbolMorph('pointRight', 14)
            ];
        }
        pauseButton.labelString = pauseSymbols;
        pauseButton.createLabel();
        pauseButton.fixLayout();
        pauseButton.refresh();
    };

    this.controlBar.updateLabel = function () {
        var suffix = myself.world().isDevMode ?
                ' - ' + localize('development mode') : '';

        if (this.label) {
            this.label.destroy();
        }
        if (myself.isAppMode) {
            return;
        }

        this.label = new StringMorph(
            (myself.projectName || localize('untitled')) + suffix,
            14,
            'sans-serif',
            true,
            false,
            false,
            MorphicPreferences.isFlat ? null : new Point(2, 1),
            myself.frameColor.darker(myself.buttonContrast)
        );
        this.label.color = myself.buttonLabelColor;
        this.label.drawNew();
        this.add(this.label);
        this.label.setCenter(this.center());
        this.label.setLeft(this.settingsButton.right() + padding);
    };
};