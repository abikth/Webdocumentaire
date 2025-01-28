klynt.data = {
    "footer": {
        "height": 26,
        "logo": {
            "url": "http://www.klynt.net",
            "tooltip": "null",
            "image": null
        },
        "items": [
            {
                "label": "Plan de site",
                "action": {
                    "type": "openWidget",
                    "target": "964379D4-ECD6-0D5C-274B-A281A5D7D954"
                }
            },
            {
                "label": "Crédits",
                "action": {
                    "type": "openWidget",
                    "target": "C6E93AD6-1AF0-EB57-E609-A281A5D7F578"
                }
            },
            {
                "label": "Recherche",
                "action": {
                    "type": "openWidget",
                    "target": "1C35D433-C944-D999-108A-A281A5D79CFD"
                }
            }
        ],
        "buttons": [
            {
                "type": "share",
                "label": "Partage",
                "icon": "share"
            },
            {
                "type": "sound",
                "label": "Son",
                "icon": "sound"
            },
            {
                "type": "fullscreen",
                "label": "Plein Ecran",
                "icon": "fullscreen"
            },
            {
                "type": "klynt",
                "label": "Made with",
                "icon": "klynt"
            }
        ]
    },
    "advanced": {
        "enableSwipeNavigation": true,
        "enableFullWindowMode": true,
        "remoteVideosAPILocalBitrate": "best",
        "hasRemoteVideos": false,
        "enableKeyboardNavigation": true,
        "remoteVideosAPIURL": "http://api.klynt.net/video/klynt-video-api.php",
        "enableScrollNavigation": true
    },
    "mainSequence": "05ECA459-BD49-46FE-B96B-A281A5DED243",
    "miniPlayer": {
        "thanksForWatchingWording": "Merci de votre visite !",
        "resumePlaybackWording": "Relancer la lecture ?",
        "fullscreenInfoWording": "Ce programme va se lancer en plein écran",
        "yesWording": "Oui",
        "title": "Webdocumentaire : À travers mes yeux",
        "thumbnail": "Medias/Photos/Photoshop_-_Affiche_-_Page_d_accueil.png",
        "noWording": "Non",
        "analyticsKey": "",
        "redirectToMobileApp": "auto",
        "downloadAppWording": "Télécharger l'app",
        "url": "",
        "launchAppWording": "Et lancer le projet",
        "description": "Immersion dans l'univers de \"À travers mes yeux\""
    },
    "watermark": {
        "enabled": false,
        "position": "top-left",
        "image": "Player/css/editor/img/watermark.png",
        "action": {
            "type": "openSequence",
            "target": "null"
        },
        "displayOnStartSequence": true
    },
    "sequences": {
        "48253FAE-329B-083D-D894-A2D40FA6891A": {
            "hideInMindmap": true,
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "title": "Navigation Contextuelle",
            "x": 876.9333333333334,
            "size": "small",
            "y": 190,
            "backgroundColor": "rgba(0,0,0,0.75)",
            "tags": "Navigation,Explorer,Webdoc",
            "duration": 48.65590009362793,
            "color": "rgba(0,0,0,1)",
            "texts": [
                {
                    "centerY": "61.00",
                    "dataend": "00:30.00",
                    "type": "txt-Default",
                    "text": "<p style=\"text-align: left;\"><span style=\"font-family: 'Stardos Stencil';\">Podcast</span></p>",
                    "name": "Podcast",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 0,
                    "scales": true,
                    "duration": "00:30.00",
                    "centerX": "-176.00",
                    "width": "485.00",
                    "classNames": "Podcast",
                    "height": "64.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "112100D3-EFEE-59F6-662E-A29442CD8427",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "D832C2A3-A680-3B1D-5B17-A48EF121E362",
                        "color": "rgba(0,0,0,1)"
                    },
                    "id": "0CEF32B6-EA7A-02A4-907E-A2EB670CDE50",
                    "databegin": "00:00.00"
                },
                {
                    "centerY": "1.00",
                    "dataend": "00:30.00",
                    "type": "txt-Default",
                    "text": "<p style=\"text-align: left;\"><span style=\"font-family: 'Stardos Stencil';\"><span style=\"font-family: 'Stardos Stencil';\">Interview</span></span></p>",
                    "name": "Interview",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "scales": true,
                    "duration": "00:30.00",
                    "centerX": "-176.00",
                    "width": "485.00",
                    "classNames": "Interview",
                    "height": "64.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Interview",
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "8C223FE5-5B28-4570-CEA0-A29403BC9132",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "AE3EB8C0-AF12-A19B-BB5C-A2E709E11306",
                        "color": "rgba(0,0,0,1)"
                    },
                    "id": "445403F5-8996-84A9-5C92-A2E709E0603B",
                    "databegin": "00:00.00"
                },
                {
                    "centerY": "-59.00",
                    "dataend": "00:30.00",
                    "type": "txt-Default",
                    "text": "<p><span style=\"font-family: 'Stardos Stencil';\"><span style=\"font-family: 'Stardos Stencil';\">Making-of</span></span></p>",
                    "name": "Making-of",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "scales": true,
                    "duration": "00:30.00",
                    "centerX": "-176.00",
                    "width": "485.00",
                    "classNames": "Making-of",
                    "height": "64.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Making-of",
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "114701A9-5B5E-E7C6-45A0-A293F4903A67",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "4E7140A2-6ABE-A7F3-4761-A2DE31C169FA",
                        "color": "rgba(0,0,0,1)"
                    },
                    "id": "C5B428DF-3AE2-D0D4-69BD-A2DE31B1AB01",
                    "databegin": "00:00.00"
                },
                {
                    "centerY": "-119.26",
                    "dataend": "00:30.00",
                    "type": "txt-Default",
                    "text": "<p style=\"text-align: left;\"><span style=\"font-family: 'Stardos Stencil';\"><span class=\"Apple-style-span\" style=\"line-height: 43px;\">&Agrave; travers mes yeux</span></span></p>",
                    "name": "À travers mes yeux ",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 3,
                    "scales": true,
                    "duration": "00:30.00",
                    "centerX": "-175.95",
                    "width": "485.37",
                    "classNames": "À travers mes yeux ",
                    "height": "64.40",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "À travers mes yeux ",
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "BDE04A6B-2340-0974-9788-A293EA9554F8",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "EC696B3C-E6C0-5C13-732B-A2E2832C43E9",
                        "color": "rgba(0,0,0,1)"
                    },
                    "id": "CEE6681D-B6C6-8239-A2AC-A2E28329BBCD",
                    "databegin": "00:00.00"
                },
                {
                    "centerY": "-178.88",
                    "dataend": "00:30.00",
                    "type": "txt-Default",
                    "text": "<p style=\"text-align: left;\"><span style=\"font-family: 'Stardos Stencil';\">Accueil</span></p>",
                    "name": "Page d'accueil",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 4,
                    "scales": true,
                    "duration": "00:30.00",
                    "centerX": "-238.51",
                    "width": "360.15",
                    "classNames": "Page d'accueil",
                    "height": "64.40",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Page d'accueil",
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "05ECA459-BD49-46FE-B96B-A281A5DED243",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "C856815E-765D-BFFA-DC13-A2D87DCEB0FD",
                        "color": "rgba(0,0,0,1)"
                    },
                    "id": "4E55369F-28A1-F552-D76E-A2D5F97EEC1C",
                    "databegin": "00:00.00"
                }
            ],
            "id": "48253FAE-329B-083D-D894-A2D40FA6891A",
            "description": "Cette section vous permet de naviguer à travers différentes parties du webdocumentaire."
        },
        "05ECA459-BD49-46FE-B96B-A281A5DED243": {
            "hideInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Photoshop_-_Affiche_-_Page_d_accueil.png.png",
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "centerY": "150.00",
                    "dataend": "00:36.39",
                    "type": "klynt-button-1",
                    "zIndex": 3,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "rollOver": [
                        {
                            "value": "0.5",
                            "easing": "linear",
                            "type": "style",
                            "duration": 0.1,
                            "target": "self",
                            "reversible": true,
                            "delay": 0,
                            "name": "opacity"
                        }
                    ],
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Voir le film",
                        "hideArrowInMindmap": false,
                        "automaticTransition": false,
                        "controlDX": 0,
                        "targetSequence": "BDE04A6B-2340-0974-9788-A293EA9554F8",
                        "linkType": "linkToSequence",
                        "transition": "fade",
                        "id": "D36E88D4-8157-45B5-9141-A50FA8A711AB",
                        "color": "rgba(0,0,0,1)"
                    },
                    "scales": false,
                    "duration": "00:26.31",
                    "centerX": "0.00",
                    "width": "160.00",
                    "classNames": "Voir le film",
                    "height": "40.00",
                    "label": "Voir le film",
                    "id": "671AEE3D-CD7C-622E-138C-A46C48317FDD",
                    "databegin": "00:10.08"
                },
                {
                    "dataend": "00:40.07",
                    "left": "16.00",
                    "type": "klynt-button-8",
                    "zIndex": 13,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "top": "16.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Menu ",
                        "hideArrowInMindmap": false,
                        "id": "25420681-D193-52CF-5BF3-A2F5364616F1",
                        "targetSequence": "48253FAE-329B-083D-D894-A2D40FA6891A",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "fade",
                        "color": "rgba(0,0,0,1)",
                        "closeButtonTop": 16,
                        "closeButtonRight": 16,
                        "automaticTransition": false,
                        "pauseParent": true,
                        "linkType": "linkToSequence",
                        "overlay": true,
                        "controlDX": 0
                    },
                    "scales": false,
                    "duration": "00:40.07",
                    "width": "48.00",
                    "classNames": "Menu",
                    "height": "48.00",
                    "label": "",
                    "id": "7DCCC82C-EDE2-051E-24EB-A2F53646739F",
                    "databegin": "00:00.00"
                }
            ],
            "title": "Accueil ",
            "images": [
                {
                    "centerY": "0.00",
                    "verticalAlign": "middle",
                    "dataend": "00:35.71",
                    "src": "Medias/Photos/Photoshop_-_Affiche_-_Page_d_accueil.png",
                    "zIndex": 2,
                    "id": "0824A453-9F72-31C3-DACA-A34D046CAFFE",
                    "mediaHeight": 1350,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 1350,
                    "scales": false,
                    "duration": "00:25.63",
                    "centerX": "-0.00",
                    "width": "458.85",
                    "classNames": "Affiche",
                    "height": "316.71",
                    "name": "Photoshop_-_Affiche_-_Page_d_accueil.png",
                    "databegin": "00:10.08"
                },
                {
                    "centerY": "-119.85",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Demande_en_mariage_-_img1.jpg",
                    "zIndex": 4,
                    "id": "38BFC92A-BE47-518B-4B6E-A31ECBE7AB61",
                    "mediaHeight": 352,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 347,
                    "scales": true,
                    "duration": "00:03.14",
                    "centerX": "-265.57",
                    "width": "143.11",
                    "classNames": "Polaroid 8",
                    "height": "143.11",
                    "name": "Polaroid_-_Demande_en_mariage_-_img1.jpg",
                    "databegin": "00:06.94"
                },
                {
                    "centerY": "-138.93",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Premier_rencontre_-_img1.jpg",
                    "zIndex": 5,
                    "id": "A4B28D27-CDAD-5226-A585-A31BC9DD9876",
                    "mediaHeight": 430,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 426,
                    "scales": true,
                    "duration": "00:04.13",
                    "centerX": "118.44",
                    "width": "143.11",
                    "classNames": "Polaroid 7",
                    "height": "143.11",
                    "name": "Polaroid_-_Premier_rencontre_-_img1.jpg",
                    "databegin": "00:05.95"
                },
                {
                    "centerY": "169.94",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Danse_-_img1.jpg",
                    "zIndex": 6,
                    "id": "A55FBED1-D493-D8EA-7E5A-A321025B1F26",
                    "mediaHeight": 343,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 346,
                    "scales": true,
                    "duration": "00:05.07",
                    "centerX": "215.03",
                    "width": "143.11",
                    "classNames": "Polaroid 6",
                    "height": "143.11",
                    "name": "Polaroid_-_Danse_-_img1.jpg",
                    "databegin": "00:05.01"
                },
                {
                    "centerY": "173.52",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Dispute_-_img1.jpg",
                    "zIndex": 7,
                    "id": "732B2A4F-1E62-CB8D-51CF-A31DD1ED8BFE",
                    "mediaHeight": 431,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 427,
                    "scales": true,
                    "duration": "00:06.06",
                    "centerX": "-163.01",
                    "width": "143.11",
                    "classNames": "Polaroid 5",
                    "height": "143.11",
                    "name": "Polaroid_-_Dispute_-_img1.jpg",
                    "databegin": "00:04.02"
                },
                {
                    "centerY": "-160.40",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Danse_-_img2.jpg",
                    "zIndex": 8,
                    "id": "E9FC22E9-12AF-DC17-C1B8-A31F28B9CE9C",
                    "mediaHeight": 461,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 455,
                    "scales": true,
                    "duration": "00:07.10",
                    "centerX": "-78.34",
                    "width": "143.11",
                    "classNames": "Polaroid 4",
                    "height": "143.11",
                    "name": "Polaroid_-_Danse_-_img2.jpg",
                    "databegin": "00:02.98"
                },
                {
                    "centerY": "-5.37",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Dispute_-_img2.jpg",
                    "zIndex": 9,
                    "id": "EDBC2AF3-160C-9BDF-0076-A31D4A5FF74C",
                    "mediaHeight": 422,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 412,
                    "scales": true,
                    "duration": "00:08.08",
                    "centerX": "293.74",
                    "width": "143.11",
                    "classNames": "Polaroid 3",
                    "height": "143.11",
                    "name": "Polaroid_-_Dispute_-_img2.jpg",
                    "databegin": "00:02.00"
                },
                {
                    "centerY": "127.01",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Demande_en_mariage_-_img2.jpg",
                    "zIndex": 10,
                    "id": "F237F194-F59D-E812-EE5D-A31E462B349E",
                    "mediaHeight": 352,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 341,
                    "scales": true,
                    "duration": "00:09.08",
                    "centerX": "14.68",
                    "width": "143.11",
                    "classNames": "Polaroid 2",
                    "height": "143.11",
                    "name": "Polaroid_-_Demande_en_mariage_-_img2.jpg",
                    "databegin": "00:01.00"
                },
                {
                    "centerY": "54.26",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/Polaroid_-_Premier_rencontre_-_img2.jpg",
                    "zIndex": 11,
                    "id": "F848D034-0742-57A0-61F5-A31B5A272F02",
                    "mediaHeight": 418,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 411,
                    "scales": true,
                    "duration": "00:10.08",
                    "centerX": "-326.39",
                    "width": "143.11",
                    "classNames": "Polaroid 1",
                    "height": "143.11",
                    "name": "Polaroid_-_Premier_rencontre_-_img2.jpg",
                    "databegin": "00:00.00"
                },
                {
                    "centerY": "0.00",
                    "verticalAlign": "middle",
                    "dataend": "00:10.08",
                    "src": "Medias/Photos/After_Effect_-_Bar_de_progression_-_Page_d_accueil.gif",
                    "zIndex": 12,
                    "id": "8611F3A2-A7A7-2AB4-8B9F-A30E31E561C5",
                    "mediaHeight": 1080,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "horizontalAlign": "center",
                    "scaleMode": "zoom",
                    "mediaWidth": 1920,
                    "scales": true,
                    "duration": "00:10.08",
                    "centerX": "0.00",
                    "width": "218.00",
                    "classNames": "Bar_de_progression",
                    "height": "150.00",
                    "name": "After_Effect_-_Bar_de_progression_-_Page_d_accueil.gif",
                    "databegin": "00:00.00"
                }
            ],
            "x": 596.9333333333334,
            "size": "large",
            "y": 154.20000000000002,
            "backgroundColor": "rgba(0,0,0,1)",
            "tags": "Accueil,Webdoc,Présentation,Immersion,Atraversmesyeux",
            "duration": 34.71183116435651,
            "color": "rgba(0,0,0,1)",
            "id": "05ECA459-BD49-46FE-B96B-A281A5DED243",
            "description": "Ce webdocumentaire vous offre une manière différente de découvrir l’univers de \"À travers mes yeux\", en explorant chaque aspect du projet sous un nouvel angle."
        },
        "BDE04A6B-2340-0974-9788-A293EA9554F8": {
            "hideInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Vignette_-_A_travers_mes_yeux.jpg.jpg",
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "dataend": "02:19.99",
                    "left": "16.00",
                    "type": "klynt-button-8",
                    "zIndex": 3,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "top": "16.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Menu ",
                        "hideArrowInMindmap": false,
                        "id": "E573F91D-AD85-0263-4898-A46FA3D9A0E2",
                        "targetSequence": "48253FAE-329B-083D-D894-A2D40FA6891A",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "fade",
                        "color": "rgba(0,0,0,1)",
                        "closeButtonTop": 16,
                        "closeButtonRight": 16,
                        "automaticTransition": false,
                        "pauseParent": true,
                        "linkType": "linkToSequence",
                        "overlay": true,
                        "controlDX": 0
                    },
                    "scales": false,
                    "duration": "02:19.99",
                    "width": "48.00",
                    "classNames": "Menu",
                    "height": "48.00",
                    "label": "",
                    "id": "4C1D8A75-2A2B-59D8-45D6-A46FA3D9CDBB",
                    "databegin": "00:00.00"
                }
            ],
            "title": "À travers mes yeux ",
            "externalVideos": [
                {
                    "centerY": "50.00",
                    "verticalAlign": "middle",
                    "dataend": "02:19.99",
                    "zIndex": 1,
                    "player": true,
                    "externalId": "Iv2SBTt_e3k",
                    "mediaWidth": 480,
                    "volume": 1,
                    "scales": true,
                    "mediaHeight": 270,
                    "url": "https://www.youtube.com/watch?v=Iv2SBTt_e3k&t=1s",
                    "loop": false,
                    "height": "380.00",
                    "platform": "youtube",
                    "id": "4E31A6DA-4C42-E5AD-4092-AE94B6FF53A6",
                    "autoplay": true,
                    "poster": "Medias/Posters/A_travers_mes_yeux.jpg",
                    "name": "À travers mes yeux",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "scaleMode": "zoom",
                    "width": "680.00",
                    "duration": "02:19.99",
                    "centerX": "0.00",
                    "clipBegin": 0,
                    "horizontalAlign": "center",
                    "databegin": "00:00.00"
                }
            ],
            "x": 302,
            "size": "medium",
            "y": 507,
            "backgroundColor": "rgba(0,0,0,1)",
            "tags": "Atraversmesyeux,CourtMétrage,NikonFilmFestival,SuperPouvoirs",
            "duration": 138.986,
            "color": "rgba(0,0,0,1)",
            "texts": [
                {
                    "centerY": "-215.73",
                    "dataend": "02:19.99",
                    "type": "txt-Title-1",
                    "text": "<p style=\"text-align: center;\"><span style=\"font-family: 'Stardos Stencil'; font-size: 20pt;\">&Agrave; travers mes yeux&nbsp;</span></p>",
                    "name": "Texte 1",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "scales": true,
                    "duration": "02:19.99",
                    "centerX": "-21.88",
                    "width": "892.51",
                    "height": "71.54",
                    "id": "0FAB1C01-7C83-8C04-CEB6-A472A1C7314D",
                    "databegin": "00:00.00"
                }
            ],
            "id": "BDE04A6B-2340-0974-9788-A293EA9554F8",
            "description": "Regardez le court-métrage \"À travers mes yeux\", réalisé pour le Nikon Film Festival. Cette première participation de notre équipe aborde le thème des \"Super Pouvoirs\"."
        },
        "8C223FE5-5B28-4570-CEA0-A29403BC9132": {
            "hideInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Vignette-Interview.jpg.jpg",
            "hideThumbnailInMindmap": false,
            "texts": [
                {
                    "dataend": "02:25.63",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Y a-t-il eu des désaccords au sein du groupe ?",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Y a-t-il eu des désaccords au sein du groupe ?",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:05.00",
                    "width": "400.00",
                    "classNames": "Question 3",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "488246DD-325A-31F3-1416-A5087076A212",
                    "databegin": "02:20.63"
                },
                {
                    "dataend": "03:42.24",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Quelle séquence a été la plus difficile à tourner ?",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Quelle séquence a été la plus difficile à tourner ?",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:05.00",
                    "width": "400.00",
                    "classNames": "  ",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "5A27DC5A-F2D8-9191-5367-A5097002AAEE",
                    "databegin": "03:37.24"
                },
                {
                    "dataend": "01:15.47",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Pourquoi ce choix d’acteurs ?",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Pourquoi ce choix d’acteurs ?",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:05.00",
                    "width": "400.00",
                    "classNames": "Question 2",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "ACE6A1DA-02FB-63B7-AC87-A50729683778",
                    "databegin": "01:10.47"
                },
                {
                    "dataend": "05:18.79",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Êtes-vous fier du projet ?",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Êtes-vous fier du projet ?",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:05.00",
                    "width": "400.00",
                    "classNames": "Question 5 ",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "4460E210-1B4E-54A2-7CAD-A50B4C2D386D",
                    "databegin": "05:13.79"
                },
                {
                    "dataend": "00:19.24",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Quels ont été les défis de la production ?",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Quels ont été les défis de la production ?",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:04.00",
                    "width": "400.00",
                    "classNames": "Question 1",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "E8C11686-F5BD-4979-6D65-A504ED8C4369",
                    "databegin": "00:14.24"
                },
                {
                    "centerY": "-215.73",
                    "dataend": "09:18.44",
                    "type": "txt-Title-1",
                    "text": "<p style=\"text-align: center;\"><span style=\"font-family: 'Stardos Stencil'; font-size: 20pt;\">Interview&nbsp;</span></p>",
                    "name": "Interview",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "scales": true,
                    "duration": "09:18.44",
                    "centerX": "-21.88",
                    "width": "892.51",
                    "classNames": "Interview",
                    "height": "71.54",
                    "id": "0E9E9330-FF2F-EBF0-03B7-A47BEC41A914",
                    "databegin": "00:00.00"
                }
            ],
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "dataend": "09:18.44",
                    "left": "16.00",
                    "type": "klynt-button-8",
                    "zIndex": 3,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "top": "16.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Menu ",
                        "hideArrowInMindmap": false,
                        "id": "7EAB3A33-5BE3-3E08-F85F-A2F5FF9F6942",
                        "targetSequence": "48253FAE-329B-083D-D894-A2D40FA6891A",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "fade",
                        "color": "rgba(0,0,0,1)",
                        "closeButtonTop": 16,
                        "closeButtonRight": 16,
                        "automaticTransition": false,
                        "pauseParent": true,
                        "linkType": "linkToSequence",
                        "overlay": true,
                        "controlDX": 0
                    },
                    "scales": false,
                    "duration": "09:18.44",
                    "width": "48.00",
                    "classNames": "Menu",
                    "height": "48.00",
                    "label": "",
                    "id": "6788A0F8-9FD0-7212-8E4D-A2F5FF9AD6FC",
                    "databegin": "00:00.00"
                }
            ],
            "title": "Interview",
            "x": 675,
            "size": "medium",
            "y": 504,
            "backgroundColor": "rgba(0,0,0,1)",
            "tags": "Interviews,Équipe,Défis,Questions,Réponse",
            "duration": 557.44,
            "color": "rgba(0,0,0,1)",
            "videos": [
                {
                    "centerY": "50.00",
                    "verticalAlign": "middle",
                    "dataend": "09:17.44",
                    "zIndex": 0,
                    "horizontalAlign": "center",
                    "player": true,
                    "mediaWidth": 1920,
                    "volume": 1,
                    "scales": true,
                    "mediaHeight": 1080,
                    "autoplay": true,
                    "loop": false,
                    "height": "380.00",
                    "id": "20CDC057-CF96-46D1-742E-A50134AC4814",
                    "width": "680.00",
                    "syncMaster": true,
                    "poster": "Medias/Posters/Interview.mp4.jpg",
                    "name": "Interview.mp4",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "scaleMode": "zoom",
                    "duration": "09:17.44",
                    "centerX": "0.00",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/Interview.mp4"
                        }
                    ],
                    "frameRate": 0,
                    "databegin": "00:00.00"
                }
            ],
            "id": "8C223FE5-5B28-4570-CEA0-A29403BC9132",
            "description": "Écoutez les membres de l’équipe parler des défis du tournage, de l'organisation sur le plateau et d'autres sujets que nous n'avons pas partagés ailleurs."
        },
        "114701A9-5B5E-E7C6-45A0-A293F4903A67": {
            "hideInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Vignette_-_Making-of.JPG.jpg",
            "hideThumbnailInMindmap": false,
            "texts": [
                {
                    "dataend": "00:11.56",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Jour 1",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Jour 1",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:04.00",
                    "width": "400.00",
                    "classNames": "Jour 1",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "35C967CB-4603-6A14-0618-AEAC84B68085",
                    "databegin": "00:06.56"
                },
                {
                    "dataend": "01:04.42",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Jour 2",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Jour 2",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:05.00",
                    "width": "400.00",
                    "classNames": "Jour 2",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "9736FCCD-98DF-3025-CBEC-AEAED8E1E9A8",
                    "databegin": "00:59.42"
                },
                {
                    "dataend": "01:36.47",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Jour 3",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Jour 3",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:04.00",
                    "width": "400.00",
                    "classNames": "Jour 3",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "564E2640-D474-3A99-AF16-AEAFE3D86A93",
                    "databegin": "01:31.47"
                },
                {
                    "dataend": "01:58.98",
                    "left": "100.00",
                    "type": "txt-Default",
                    "text": "<p>Double-cliquez pour éditer.</p>",
                    "name": "Jour 4",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "top": "380.00",
                    "annotation": {
                        "label": "Jour 4",
                        "thumbnail": true
                    },
                    "scales": false,
                    "duration": "00:04.00",
                    "width": "400.00",
                    "classNames": "Jour 4",
                    "height": "60.00",
                    "style": {
                        "opacity": 0
                    },
                    "id": "DBFD4279-9A30-1329-417F-AEB088D866E8",
                    "databegin": "01:53.98"
                },
                {
                    "centerY": "-215.73",
                    "dataend": "02:50.03",
                    "type": "txt-Title-1",
                    "text": "<p style=\"text-align: center;\"><span style=\"font-family: 'Stardos Stencil'; font-size: 20pt;\"><span style=\"font-family: 'Stardos Stencil';\">Making-of</span></span></p>",
                    "name": "Making-of",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 2,
                    "scales": true,
                    "duration": "02:50.03",
                    "centerX": "-21.88",
                    "width": "892.51",
                    "classNames": "Making-of",
                    "height": "71.54",
                    "id": "96D4DCE2-F62C-5F64-7A13-A47A13DBB46C",
                    "databegin": "00:00.00"
                }
            ],
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "dataend": "02:50.03",
                    "left": "16.00",
                    "type": "klynt-button-8",
                    "zIndex": 3,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "top": "16.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Menu ",
                        "hideArrowInMindmap": false,
                        "id": "881A53B2-1954-35B6-99DE-A2F5DFAFCF1F",
                        "targetSequence": "48253FAE-329B-083D-D894-A2D40FA6891A",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "fade",
                        "color": "rgba(0,0,0,1)",
                        "closeButtonTop": 16,
                        "closeButtonRight": 16,
                        "automaticTransition": false,
                        "pauseParent": true,
                        "linkType": "linkToSequence",
                        "overlay": true,
                        "controlDX": 0
                    },
                    "scales": false,
                    "duration": "02:50.03",
                    "width": "48.00",
                    "classNames": "Menu",
                    "height": "48.00",
                    "label": "",
                    "id": "C4C9B075-7D3F-6738-3C70-A2F5DFAF75C0",
                    "databegin": "00:00.00"
                }
            ],
            "title": "Making-of",
            "x": 481,
            "size": "medium",
            "y": 506,
            "backgroundColor": "rgba(0,0,0,1)",
            "tags": "MakingOf,Tournage,Coulisses,BTS",
            "duration": 143.573,
            "color": "rgba(0,0,0,1)",
            "videos": [
                {
                    "centerY": "50.00",
                    "verticalAlign": "middle",
                    "dataend": "02:23.57",
                    "zIndex": 0,
                    "horizontalAlign": "center",
                    "player": true,
                    "mediaWidth": 1920,
                    "volume": 1,
                    "scales": true,
                    "mediaHeight": 1080,
                    "autoplay": true,
                    "loop": false,
                    "classNames": "Making-of",
                    "height": "380.00",
                    "id": "83CD8545-0C27-345B-EB56-A4C3C156E96A",
                    "width": "680.00",
                    "syncMaster": true,
                    "poster": "Medias/Posters/Making-of.mp4.jpg",
                    "name": "Making-of.mp4",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "scaleMode": "zoom",
                    "duration": "02:23.57",
                    "centerX": "0.00",
                    "src": [
                        {
                            "type": "video/mp4",
                            "src": "Medias/Videos/Making-of.mp4"
                        }
                    ],
                    "frameRate": 0,
                    "databegin": "00:00.00"
                }
            ],
            "id": "114701A9-5B5E-E7C6-45A0-A293F4903A67",
            "description": "Découvrez les coulisses du tournage de \"À travers mes yeux\". Dans cette vidéo making-of, vous verrez des moments drôles et sérieux qui ont marqué les quatre jours de tournage."
        },
        "112100D3-EFEE-59F6-662E-A29442CD8427": {
            "hideInMindmap": false,
            "thumbnail": "Medias/Thumbnails/Vignette_-_Podcast.JPG.jpg",
            "hideThumbnailInMindmap": false,
            "hideTitleInMindmap": false,
            "buttons": [
                {
                    "dataend": "00:30.00",
                    "left": "16.00",
                    "type": "klynt-button-8",
                    "zIndex": 2,
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "top": "16.00",
                    "link": {
                        "hideInMindmap": false,
                        "controlDY": 0,
                        "tooltip": "Menu ",
                        "hideArrowInMindmap": false,
                        "id": "B7A56A1C-5F8B-6A38-7584-A2F62059A31D",
                        "targetSequence": "48253FAE-329B-083D-D894-A2D40FA6891A",
                        "closeButton": true,
                        "automaticClose": false,
                        "transition": "fade",
                        "color": "rgba(0,0,0,1)",
                        "closeButtonTop": 16,
                        "closeButtonRight": 16,
                        "automaticTransition": false,
                        "pauseParent": true,
                        "linkType": "linkToSequence",
                        "overlay": true,
                        "controlDX": 0
                    },
                    "scales": false,
                    "duration": "00:30.00",
                    "width": "48.00",
                    "classNames": "Menu",
                    "height": "48.00",
                    "label": "",
                    "id": "4D2D0288-9C43-660C-7B5D-A2F62059877F",
                    "databegin": "00:00.00"
                }
            ],
            "title": "Podcast",
            "externalVideos": [
                {
                    "centerY": "0.00",
                    "verticalAlign": "middle",
                    "dataend": "24:43.00",
                    "zIndex": 0,
                    "player": true,
                    "externalId": "47QBUKrQ9kg",
                    "mediaWidth": 480,
                    "volume": 1,
                    "scales": true,
                    "mediaHeight": 270,
                    "width": "594.00",
                    "loop": false,
                    "syncMaster": true,
                    "platform": "youtube",
                    "id": "E467C770-5C24-F1AD-20B8-A80292443B5F",
                    "url": "https://www.youtube.com/watch?v=47QBUKrQ9kg",
                    "height": "334.00",
                    "poster": "Medias/Posters/_PODCAST__A_travers_NOS_yeux__le_podcast_qui_vous_fera_voir_le_film_d_un_nouvel__il.jpg",
                    "name": "[PODCAST] À travers NOS yeux, le podcast qui vous fera voir le film d'un nouvel œil",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "scaleMode": "zoom",
                    "autoplay": true,
                    "duration": "24:43.00",
                    "centerX": "0.00",
                    "clipBegin": 0,
                    "horizontalAlign": "center",
                    "databegin": "00:00.00"
                }
            ],
            "x": 862,
            "size": "medium",
            "y": 503,
            "backgroundColor": "rgba(0,0,0,1)",
            "tags": "Podcast,Atraversnosyeux,equipe,Ecriture,Défis,Acteurs",
            "duration": 1483,
            "color": "rgba(0,0,0,1)",
            "texts": [
                {
                    "centerY": "-215.73",
                    "dataend": "02:18.99",
                    "type": "txt-Title-1",
                    "text": "<p style=\"text-align: center;\"><span style=\"font-family: 'Stardos Stencil'; font-size: 20pt;\">Podcast&nbsp;</span></p>",
                    "name": "Podcast",
                    "transitionIn": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "transitionOut": {
                        "type": "fade",
                        "duration": "1"
                    },
                    "zIndex": 1,
                    "scales": true,
                    "duration": "02:18.99",
                    "centerX": "-21.88",
                    "width": "892.51",
                    "classNames": "Podcast",
                    "height": "71.54",
                    "id": "15CE8C64-C4BA-5D98-D93E-A47CA05FAE99",
                    "databegin": "00:00.00"
                }
            ],
            "id": "112100D3-EFEE-59F6-662E-A29442CD8427",
            "description": "Dans ce podcast, l’équipe parle du processus de création du court-métrage, des inspirations, de l’écriture des scènes, et de la relation amoureuse au cœur de l’histoire."
        }
    },
    "share": {
        "enableLinkedIn": true,
        "thumbnail": null,
        "enableTumblr": true,
        "customSizeWording": "Personnalisé",
        "displayMiniPlayerWording": true,
        "playerWording": "Player",
        "miniPlayerWording": "Mini player",
        "originalSizeWording": "Original",
        "shortMessage": "",
        "horizontalWording": "Horizontal",
        "shareSequenceWording": "Partager la séquence",
        "linkWording": "Lien",
        "verticalWording": "Vertical",
        "socialNetworksWording": "Réseaux sociaux",
        "removeViaKlynt": true,
        "embedWording": "Intégrer",
        "title": "",
        "message": "",
        "link": null,
        "enableGooglePlus": true
    },
    "aliases": {
        "aliasToId": {
            "Navigation_Contextuelle": "48253FAE-329B-083D-D894-A2D40FA6891A",
            "Podcast": "112100D3-EFEE-59F6-662E-A29442CD8427",
            "À_travers_mes_yeux_": "BDE04A6B-2340-0974-9788-A293EA9554F8",
            "Accueil_": "05ECA459-BD49-46FE-B96B-A281A5DED243",
            "Making-of": "114701A9-5B5E-E7C6-45A0-A293F4903A67",
            "Interview": "8C223FE5-5B28-4570-CEA0-A29403BC9132"
        },
        "idToAlias": {
            "48253FAE-329B-083D-D894-A2D40FA6891A": "Navigation_Contextuelle",
            "05ECA459-BD49-46FE-B96B-A281A5DED243": "Accueil_",
            "BDE04A6B-2340-0974-9788-A293EA9554F8": "À_travers_mes_yeux_",
            "8C223FE5-5B28-4570-CEA0-A29403BC9132": "Interview",
            "114701A9-5B5E-E7C6-45A0-A293F4903A67": "Making-of",
            "112100D3-EFEE-59F6-662E-A29442CD8427": "Podcast"
        }
    },
    "wording": {
        "total_duration": "(durée totale : {0})",
        "total_sequences": "séquences au total",
        "your_are_here": "Vous êtes ici",
        "program_percentage_viewed": "du programme vu",
        "keywords": "mots-clés"
    },
    "menu": {
        "backgroundImage": null,
        "displayBackgroundImage": false,
        "searchWidget": "1C35D433-C944-D999-108A-A281A5D79CFD",
        "widgets": [
            {
                "type": "index",
                "params": {
                    "displayDescriptions": true,
                    "layout": "grid",
                    "displayDuration": true,
                    "sequences": [
                        "05ECA459-BD49-46FE-B96B-A281A5DED243",
                        "BDE04A6B-2340-0974-9788-A293EA9554F8",
                        "114701A9-5B5E-E7C6-45A0-A293F4903A67",
                        "8C223FE5-5B28-4570-CEA0-A29403BC9132",
                        "112100D3-EFEE-59F6-662E-A29442CD8427"
                    ]
                },
                "label": "Index",
                "id": "8C5A1E3F-6472-3211-A43C-A281A5D81116"
            },
            {
                "type": "credits",
                "params": {
                    "aboutColumnText": "Découvrez \"À travers mes yeux\" sous un nouveau regard grâce à ce webdocumentaire. Plongez dans le court-métrage, explorez les coulisses avec le making-of, écoutez les témoignages de l'équipe à travers des interviews, et approfondissez les thématiques abordées avec un podcast captivant.",
                    "creditsColumnTitle": "Crédits",
                    "creditsColumnText": "Mentions Légales\n\nÉquipe de Tournage\n\nArwen LEGAL\nMelissa KEREMOGLU\nRomain PIETREQUIN\nAlexandre SESTRE\nAbinaya KETHEESWARAN\nMontage\nAlexandre SESTRE\n\nCadre Production\n\nArwen LEGAL\nMelissa KEREMOGLU\nRomain PIETREQUIN\nAlexandre SESTRE\nAbinaya KETHEESWARAN\n\nPersonnes Interviewées (ITV)\n\nArwen LEGAL\nMelissa KEREMOGLU\nRomain PIETREQUIN\nAlexandre SESTRE\nAbinaya KETHEESWARAN\n\nDroits d’Image – Participants\n\nArwen LEGAL\nMelissa KEREMOGLU\nRomain PIETREQUIN\nAlexandre SESTRE\nAbinaya KETHEESWARAN\nMathis BOUCHER\n\nDroits de Diffusion (Musique et Images)\n\nSoulful Piano Serenade par Universfield – Licence : CC-by\nCinematic Shadows par Universfield – Licence : CC-by\nLofi Vibes par chill_background\n\nExplorez notre projet en écoutant le podcast ici :\nhttps://www.youtube.com/watch?v=47QBUKrQ9kg\n\nLinkedIn : https://www.linkedin.com/in/abinaya-ketheeswaran-ba04072a9/\n\nBehance : https://www.behance.net/abinayakethees1\n\nMail : abinayaketheeswaran3@gmail.com\n\nWebdocumentaire réalisé par © Abinaya KETHEESWARAN\nTous droits réservés – 2024\n\n\n\n",
                    "subtitle": "Immersion dans l'univers de \"À travers mes yeux\"",
                    "title": "Webdocumentaire : À travers mes yeux",
                    "aboutColumnTitle": "A Propos"
                },
                "label": "Crédits",
                "id": "C6E93AD6-1AF0-EB57-E609-A281A5D7F578"
            },
            {
                "enabled": true,
                "type": "search",
                "placeHolderWording": "Tapez ici...",
                "resultWording": "Résultat pour : ",
                "resultsWording": "Résultats pour : ",
                "label": "Recherche",
                "id": "1C35D433-C944-D999-108A-A281A5D79CFD"
            },
            {
                "type": "mindmap",
                "id": "964379D4-ECD6-0D5C-274B-A281A5D7D954",
                "displayDescriptions": false,
                "largeSequenceSize": 100,
                "displayWatermark": false,
                "mediumSequenceSize": 60,
                "label": "Mindmap",
                "displayLinksArrow": false,
                "smallSequenceSize": 25
            }
        ],
        "offset_sequence": 12
    },
    "general": {
        "width": 970,
        "projectHost": "",
        "height": 545,
        "overlayCloseButtonRight": 16,
        "analyticsKey": "",
        "projectId": "C3B0792B-EAAD-CFAE-AEAF-A2819743402A",
        "description": "Découvrez \"À travers mes yeux\" sous un nouveau regard grâce à ce webdocumentaire. Plongez dans le court-métrage, explorez les coulisses avec le making-of, écoutez les témoignages de l'équipe à travers des interviews, et approfondissez les thématiques abordées avec un podcast captivant.",
        "mapsKey": "",
        "title": "Webdocumentaire : À travers mes yeux",
        "author": "Abinaya",
        "modificationDate": 1738098715195,
        "overlayCloseButtonTop": 16,
        "primaryColor": 3355443,
        "editorVersionNumber": "3.5.007",
        "username": "Abinaya",
        "secondaryColor": 16777215,
        "editorVersionLabel": "Klynt 3.5.007",
        "tertiaryColor": 15286861,
        "mainFontName": "Open Sans",
        "ratio": "16/9",
        "mainFontSize": 20,
        "level": 5,
        "creationDate": 1737893189443,
        "keywords": "À travers mes yeux,Webdocumentaire,Court-métrage,Making-of,Interviews équipe,Podcast,Immersion,Nikon Film Festival"
    }
}