/**
 * Legacy Challenge Packs - by Burn, the witch and Anthony Fuller
 *
 *
 * @licence Public Domain
 */

const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const groups = [
    //  Master Vampire (Paris)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
        "Image": "images/challenges/categories/packvampire/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "vampire-pack",
        "Description": "",
        "OrderIndex": 4.5,
        "Challenges": [
            {
                "Id": "f4ac723d-4c9d-4369-aedf-ffff22a33884",
                "Name": "UI_CHALLENGES_PARIS_MASTER_VAMPIRE_NAME",
                "ImageName": "images/challenges/paris/paris_master_vampire.jpg",
                "Description": "UI_CHALLENGES_PARIS_MASTER_VAMPIRE_DESC",
                "Rewards": {
                    "MasteryXP": 10000
                },
                "Drops": ["PROP_MELEE_SYRINGE_SEDATIVE"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "9454f51f-7c44-40aa-8e89-7d262892382a",
                            "fc75df5d-9a78-46b1-8efb-2253df839fed",
                            "3732a5cf-0ffa-4d50-ac36-6bf0087357fe",
                            "b4ac68e8-5d7a-4c45-a321-2cebe2fb2963",
                            "2e4d64ec-8994-4b19-a2ca-4ebef1807c2c",
                            "ef763fd6-5ac2-49f7-9439-b8339293d66b",
                            "1d777936-b431-43a0-971a-784834e87193"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "vampire-pack"]
            },
            {
                "Id": "1d777936-b431-43a0-971a-784834e87193",
                "Name": "UI_CHALLENGES_PARIS_VANISHING_NAME",
                "ImageName": "images/challenges/paris/paris_vanish.jpg",
                "Description": "UI_CHALLENGES_PARIS_VANISHING_DESC",
                "Rewards": {
                    "MasteryXP": 5000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "EvadeBlame": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        },
                        "Start": {
                            "DisguiseBlown": {
                                "Condition": {
                                    "$not": {
                                        "$eq": [
                                            "$Value",
                                            "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                        ]
                                    }
                                },
                                "Transition": "EvadeBlame"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "vampire-pack", "live"]
            },
            {
                "Id": "2e4d64ec-8994-4b19-a2ca-4ebef1807c2c",
                "Name": "UI_CHALLENGES_PARIS_SHOCKING_NAME",
                "ImageName": "images/challenges/paris/paris_shocking.jpg",
                "Description": "UI_CHALLENGES_PARIS_SHOCKING_DESC",
                "Rewards": {
                    "MasteryXP": 2500
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillMethodStrict",
                                                "accident_electric"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "vampire-pack", "live"]
            },
            {
                "Id": "3732a5cf-0ffa-4d50-ac36-6bf0087357fe",
                "Name": "UI_CHALLENGES_PARIS_SABRE_NAME",
                "ImageName": "images/challenges/paris/paris_sabre.jpg",
                "Description": "UI_CHALLENGES_PARIS_SABRE_DESC",
                "Rewards": {
                    "MasteryXP": 2500
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillItemRepositoryId",
                                                "94f52181-b9ec-4363-baef-d53b4e424b74"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "vampire-pack", "live"]
            },
            {
                "Id": "9454f51f-7c44-40aa-8e89-7d262892382a",
                "Name": "UI_CHALLENGES_PARIS_DIGUISE_VAMPIRE_NAME",
                "ImageName": "images/challenges/paris/paris_disguise_vampire.jpg",
                "Description": "UI_CHALLENGES_PARIS_BECOME_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "easy", "vampire-pack", "live"]
            },
            {
                "Id": "b4ac68e8-5d7a-4c45-a321-2cebe2fb2963",
                "Name": "UI_CHALLENGES_PARIS_TRICK_NAME",
                "ImageName": "images/challenges/paris/paris_trick.jpg",
                "Description": "UI_CHALLENGES_PARIS_TRICK_DESC",
                "Rewards": {
                    "MasteryXP": 2500
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "FireworkStart"
                                    ]
                                },
                                "Transition": "Triggered"
                            }
                        },
                        "Triggered": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.SetPieceType",
                                                "93f3b249-1a2c-46e0-a575-1136a4d00e58"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "FireworkEnd"
                                    ]
                                },
                                "Transition": "Start"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "vampire-pack", "live"]
            },
            {
                "Id": "ef763fd6-5ac2-49f7-9439-b8339293d66b",
                "Name": "UI_CHALLENGES_PARIS_RESTING_NAME",
                "ImageName": "images/challenges/paris/paris_resting.jpg",
                "Description": "UI_CHALLENGES_PARIS_RESTING_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                    ]
                                },
                                "Transition": "ValidDisguise"
                            }
                        },
                        "ValidDisguise": {
                            "Disguise": {
                                "Transition": "Start"
                            },
                            "exit_gate": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a09d755b-6df9-4878-a4c5-4718a6c1c6d9"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "easy", "vampire-pack", "live"]
            },
            {
                "Id": "fc75df5d-9a78-46b1-8efb-2253df839fed",
                "Name": "UI_CHALLENGES_PARIS_PHANTOM_NAME",
                "ImageName": "images/challenges/paris/paris_phantom.jpg",
                "Description": "UI_CHALLENGES_PARIS_PHANTOM_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_VAMPIRE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Collection": [
                            "966a8c88-76eb-4cfa-a50a-b927618b22f5",
                            "69495224-e982-4a79-989c-afff7e980490",
                            "e3c339ce-b390-45d4-ae37-7151947c3fe1",
                            "0612c231-65f3-43a8-a6f6-a0f2805ce234"
                        ]
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "1fdc259e-b96a-47f2-bbd8-e86e78d6df70"
                                            ]
                                        },
                                        {
                                            "$any": {
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$Value.SetPieceType"
                                                    ]
                                                },
                                                "in": "$.Collection"
                                            }
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "vampire-pack", "live"]
            }
        ]
    },
    // Secret Santa (Paris)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
        "Image": "images/contracts/parisnoel/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "HOHOHOHO",
        "Description": "",
        "OrderIndex": 4.6,
        "Challenges": [
            {
                "Id": "f5b45105-2cf7-4ae5-88f3-d90eb3a051ad",
                "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "ImageName": "images/challenges/paris/noel_master_santa.jpg",
                "Description": "UI_CHALLENGES_NOEL_MASTER_SANTA_DESC_2",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["TOKEN_OUTFIT_HERO_SANTACLAUS_SUIT"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "0ae2ffdd-8294-4005-bcb1-80a27cad25cc",
                            "09966536-d4d9-47a6-afb5-63a1dfe0a02a",
                            "98d0787b-cc0b-48e4-b667-5473a0a4c558",
                            "dd37d9a2-87fc-416b-aa60-4b09cc4e4044",
                            "55d55085-b101-4d85-90ee-b7f04a9fe14d",
                            "a7fa41b0-a161-4f49-beda-1f0e7a45b7cc",
                            "adf48d58-2ee4-4066-944d-f7cdbc4b3dcc",
                            "5e0d4f1e-4e45-43e4-8fe3-6e38067afe93",
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "feats", "live"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "09966536-d4d9-47a6-afb5-63a1dfe0a02a",
                "Name": "UI_CHALLENGES_NOEL_GIFTKEEPSGIVING_NAME",
                "ImageName": "images/challenges/paris/noel_giftkeepsgiving.jpg",
                "Description": "UI_CHALLENGES_NOEL_GIFTKEEPSGIVING_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["TOKEN_OUTFIT_REWARD_HERO_CHRISTMASJUMPER_SUIT"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "Goal": 2
                    },
                    "Context": {
                        "Count": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Chimney"
                                }
                            ]
                        },
                        "Chimney": {
                            "exit_gate": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "b4eaa447-0872-4a88-8b66-572f9eb271a2"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "713feae1-28fc-402b-a8bd-b7f86fbe1e7d"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "assassination"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "98d0787b-cc0b-48e4-b667-5473a0a4c558",
                "Name": "UI_CHALLENGES_NOEL_BOTH_EXPLOSION_NAME",
                "ImageName": "images/challenges/paris/noel_both_explosion.jpg",
                "Description": "UI_CHALLENGES_NOEL_BOTH_EXPLOSION_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_XMAS_STAR"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Context": {},
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "Targets_Mourning"
                                    ]
                                },
                                "Transition": "Kill_Position"
                            }
                        },
                        "Kill_Position": {
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "21017f2e-3090-4b41-91b9-1ec4ddd358f9"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "a8a0c154-c36f-413e-8f29-b83a1b7a22f0"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "a713a8a2-e203-4032-9c4a-1f8eab4c3efa"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "a8a0c154-c36f-413e-8f29-b83a1b7a22f0"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Is_DoubleKill"
                            }
                        },
                        "Is_DoubleKill": {
                            "$timer": {
                                "Condition": {
                                    "$after": 0.1
                                },
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "21017f2e-3090-4b41-91b9-1ec4ddd358f9"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "a8a0c154-c36f-413e-8f29-b83a1b7a22f0"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "a713a8a2-e203-4032-9c4a-1f8eab4c3efa"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "a8a0c154-c36f-413e-8f29-b83a1b7a22f0"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "assassination", "live"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "a7fa41b0-a161-4f49-beda-1f0e7a45b7cc",
                "Name": "UI_CHALLENGES_NOEL_BOTH_SANTA_NAME",
                "ImageName": "images/challenges/paris/noel_both_santa.jpg",
                "Description": "UI_CHALLENGES_NOEL_BOTH_SANTA_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_XMAS_SHOVEL"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "Goal": 2
                    },
                    "Context": {
                        "Count": 0,
                        "TargetKilled": []
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "UI_CHALLENGES_NOEL_BOTH_SANTA_NAME"
                        }
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "21017f2e-3090-4b41-91b9-1ec4ddd358f9",
                                                        "a713a8a2-e203-4032-9c4a-1f8eab4c3efa"
                                                    ]
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.Accident",
                                                    true
                                                ]
                                            },
                                            {
                                                "$or": [
                                                    {
                                                        "$eq": [
                                                            "$Value.OutfitRepositoryId",
                                                            "315400cd-90d8-43cc-8c22-62c0cb8969a5"
                                                        ]
                                                    },
                                                    {
                                                        "$eq": [
                                                            "$Value.OutfitRepositoryId",
                                                            "31ac5259-ff59-46e0-ab0f-8ddeaf296a36"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "assassination", "live"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "adf48d58-2ee4-4066-944d-f7cdbc4b3dcc",
                "Name": "UI_CHALLENGES_NOEL_GIFTANDTAKE_NAME",
                "ImageName": "images/challenges/paris/noel_GiftAndTake.jpg",
                "Description": "UI_CHALLENGES_NOEL_GIFTANDTAKE_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_DEVICE_EXPLOSIVE_PRESENT"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillItemRepositoryId",
                                                "c601c095-e1dc-4490-aeae-e8e200dd9ac8"
                                            ]
                                        },
                                        {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.OutfitRepositoryId",
                                                        "315400cd-90d8-43cc-8c22-62c0cb8969a5"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.OutfitRepositoryId",
                                                        "31ac5259-ff59-46e0-ab0f-8ddeaf296a36"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "assassination", "hard"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "0ae2ffdd-8294-4005-bcb1-80a27cad25cc",
                "Name": "CHALLENGEPACK_NOEL_COMPLETEDMISSION_NAME",
                "ImageName": "images/challenges/paris/noel_missioncompleted.jpg",
                "Description": "CHALLENGEPACK_NOEL_COMPLETEDMISSION_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": ["PROP_MELEE_XMAS_AXE"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "ContractEnd": {
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["feats", "story", "live", "easy"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "55d55085-b101-4d85-90ee-b7f04a9fe14d",
                "Name": "UI_CHALLENGES_NOEL_PACIFY_BRICK_NAME",
                "ImageName": "images/challenges/paris/noel_pacify_brick.jpg",
                "Description": "UI_CHALLENGES_NOEL_PACIFY_BRICK_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": ["PROP_MELEE_XMAS_CROWBAR"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "Goal": 3
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "UI_CHALLENGES_NOEL_PACIFY_BRICK_NAME"
                        }
                    },
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "a713a8a2-e203-4032-9c4a-1f8eab4c3efa"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "5cc4d1ea-b4fa-4667-ba3a-b6e859f03059"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "medium", "feats", "live"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "5e0d4f1e-4e45-43e4-8fe3-6e38067afe93",
                "Name": "UI_CHALLENGES_NOEL_5PRESENTS_NAME",
                "ImageName": "images/challenges/paris/noel_5Presents.jpg",
                "Description": "UI_CHALLENGES_NOEL_5PRESENTS_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": ["PROP_DEVICE_LIL_FLASHY_REMOTE_FLASH"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 5
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal"
                        }
                    },
                    "Context": {
                        "Count": 0
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "PresentOpened": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["easy", "feats"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            },
            {
                "Id": "dd37d9a2-87fc-416b-aa60-4b09cc4e4044",
                "Name": "UI_CHALLENGES_NOEL_FIND_ITEMS_NAME",
                "ImageName": "images/challenges/paris/noel_find_items.jpg",
                "Description": "UI_CHALLENGES_NOEL_FIND_ITEMS_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": ["PROP_MELEE_XMAS_FIREPOKER"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SECRET_SANTA",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_PARIS",
                "ParentLocationId": "LOCATION_PARENT_PARIS",
                "Type": "contract",
                "DifficultyLevels": [],
                "OrderIndex": 10000,
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "TargetItems": [
                            "22183fd3-d837-47c6-9c44-05637300af93",
                            "e755471f-e6fd-438f-b343-7c98fbb50107",
                            "b86b9ece-c929-44f6-8903-8f2c817e2a19",
                            "ce8e7099-e60d-47e8-bfd6-4918777f2c8b",
                            "58dceb1c-d7db-41dc-9750-55e3ab87fdf0",
                            "e55eb9a4-e79c-43c7-970b-79e94e7683b7",
                            "e83c4ea3-e964-43b0-9804-55cfbb32c83a",
                            "e312a416-5b56-4cb5-8994-1d4bc82fbb84",
                            "049ee3c9-b504-4e2d-9e7e-674e57d8e4ec",
                            "c86ce2f4-7bd1-4949-acc4-54e5428d9396",
                            "31f36818-623f-4c92-892f-d7b19bb325e1",
                            "94f52181-b9ec-4363-baef-d53b4e424b74"
                        ]
                    },
                    "Context": {
                        "ItemArray": []
                    },
                    "ContextListeners": {
                        "ItemArray": {
                            "type": "challengecounter",
                            "count": "($.ItemArray).Count",
                            "total": "($.TargetItems).Count"
                        }
                    },
                    "States": {
                        "Start": {
                            "BurglarsStoleItemEvent": {
                                "Transition": "Failure"
                            },
                            "ItemPickedUp": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            },
                                            "in": "$.TargetItems"
                                        }
                                    },
                                    "Actions": {
                                        "$pushunique": [
                                            "ItemArray",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.TargetItems).Count",
                                            "($.ItemArray).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ItemDropped": {
                                "Actions": {
                                    "$remove": [
                                        "ItemArray",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            },
                            "ItemRemovedFromInventory": {
                                "Actions": {
                                    "$remove": [
                                        "ItemArray",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            },
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "21017f2e-3090-4b41-91b9-1ec4ddd358f9"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "a713a8a2-e203-4032-9c4a-1f8eab4c3efa"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "feats", "live"],
                "InclusionData": {
                    "ContractIds": ["4e45e91a-94ca-4d89-89fc-1b250e608e73"]
                }
            }
        ]
    },
    // Plumber's Apprentice (Sapienza)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
        "Image": "images/challenges/categories/packplumber/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "plumber-pack",
        "Description": "",
        "OrderIndex": 4.7,
        "Challenges": [
            {
                "Id": "b2b1f698-68be-4b50-825d-9a337a449b81",
                "Name": "UI_CHALLENGES_SAPIENZA_PLUMBER_MASTER_PLUMBER_NAME",
                "ImageName": "images/challenges/sapienza/plumber_master_plumber.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_PLUMBER_MASTER_PLUMBER_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["PROP_MELEE_MODERN_HAMMER"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "EligibleChallenges": [
                            "b539f72b-215c-4c98-8ca4-3687af2fda59",
                            "e14309fe-2899-4fe4-bf65-dc5c6c599ff5",
                            "c16426a1-5471-4a22-b220-157e4ad13279",
                            "bc6c24d0-1e57-4cb6-b76e-5f8f2fa6ccdb"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.EligibleChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.EligibleChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "plumber-pack", "live"]
            },
            {
                "Id": "b539f72b-215c-4c98-8ca4-3687af2fda59",
                "Name": "UI_CHALLENGES_SAPIENZA_PLUMBER_PACIFY_NAME",
                "ImageName": "images/challenges/sapienza/plumber_pacify.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_PLUMBER_PACIFY_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_CONTAINER_SUITCASE_TOOL_BOX"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 10
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "7aeb740f-3d60-4e49-8d27-15a98067ce9f"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.OutfitRepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "37352a6b-eb58-4458-a5d6-522dd0508baa",
                                                        "844680e8-ae40-4fec-92b7-69c7619feb82"
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Transition": "Start"
                                }
                            ],
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "plumber-pack", "live"]
            },
            {
                "Id": "bc6c24d0-1e57-4cb6-b76e-5f8f2fa6ccdb",
                "Name": "UI_CHALLENGES_SAPIENZA_PLUMBER_EXPLOSION_KILL_NAME",
                "ImageName": "images/challenges/sapienza/plumber_explosion_kill.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_PLUMBER_EXPLOSION_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_TOOL_WRENCH_HANDYMAN"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 5
                    },
                    "Context": {
                        "Completed": [],
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "End_Contract": {
                            "ContractEnd": {
                                "Transition": "Success"
                            },
                            "Kill": {
                                "Transition": "Failure"
                            }
                        },
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "Completed",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_explosion"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.OutfitRepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "37352a6b-eb58-4458-a5d6-522dd0508baa",
                                                        "844680e8-ae40-4fec-92b7-69c7619feb82"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$Value.IsTarget", false]
                                    },
                                    "Transition": "Failure"
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "End_Contract"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "plumber-pack", "live"]
            },
            {
                "Id": "c16426a1-5471-4a22-b220-157e4ad13279",
                "Name": "UI_CHALLENGES_SAPIENZA_PLUMBER_DROWN_KILL_NAME",
                "ImageName": "images/challenges/sapienza/plumber_drown_kill.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_PLUMBER_DROWN_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": ["PROP_MELEE_HOBBY_KNIFE"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 3
                    },
                    "Context": {
                        "Completed": [],
                        "Count": 0
                    },
                    "ContextListeners": {
                        "TargetKilled": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "Completed",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_drown"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.OutfitRepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "37352a6b-eb58-4458-a5d6-522dd0508baa",
                                                        "844680e8-ae40-4fec-92b7-69c7619feb82"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "medium", "plumber-pack", "live"]
            },
            {
                "Id": "e14309fe-2899-4fe4-bf65-dc5c6c599ff5",
                "Name": "UI_CHALLENGES_SAPIENZA_PLUMBER_SCREWDRIVER_KILL_NAME",
                "ImageName": "images/challenges/sapienza/plumber_screwdriver_kill.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_PLUMBER_SCREWDRIVER_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": ["PROP_TOOL_SCREWDRIVER_PROFESSIONAL"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PLUMBER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "GoalGreen": 2,
                        "GoalRed": 2,
                        "TotalCount": 4
                    },
                    "Context": {
                        "CountGreen": 0,
                        "CountRed": 0,
                        "TargetKilled": []
                    },
                    "ContextListeners": {
                        "TargetKilled": {
                            "count": "($.TargetKilled).Count",
                            "total": "$.TotalCount",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "CountRed",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "12cb6b51-a6dd-4bf5-9653-0ab727820cac"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "37352a6b-eb58-4458-a5d6-522dd0508baa"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$le": ["$.CountRed", 1]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Actions": {
                                        "$inc": "CountGreen",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "12cb6b51-a6dd-4bf5-9653-0ab727820cac"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "844680e8-ae40-4fec-92b7-69c7619feb82"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$le": ["$.CountGreen", 1]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.CountRed",
                                            "$.CountGreen",
                                            "$.GoalGreen",
                                            "$.GoalRed"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "medium", "plumber-pack", "live"]
            }
        ]
    },
    // Master Sniper (Sapienza)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
        "Image": "images/challenges/categories/packsniper/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "sniper-pack",
        "Description": "",
        "OrderIndex": 4.8,
        "Challenges": [
            {
                "Id": "c2b6cfcf-6649-4aef-aacb-29010ed3c0cc",
                "Name": "UI_CHALLENGES_SAPIENZA_SNIPER_MASTER_SNIPER_NAME",
                "ImageName": "images/challenges/sapienza/sapienza_master_sniper.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_SNIPER_MASTER_SNIPER_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["FIREARMS_HERO_SNIPER_HEAVY_009_SU_SUB_SCOUT_SKIN03"
                ],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "de84711a-ea44-4f6c-88ad-10c04d8396a4",
                            "48e7c5ac-aa9c-4e27-b536-ec389028f8cc",
                            "f63622a7-50d6-4c9f-9365-212642fd2353",
                            "f25801aa-8d17-46f1-b161-633d48c7b7af"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "sniper-pack", "live"]
            },
            {
                "Id": "48e7c5ac-aa9c-4e27-b536-ec389028f8cc",
                "Name": "UI_CHALLENGES_SAPIENZA_SNIPER_10_TARGETS_NAME",
                "ImageName": "images/challenges/sapienza/sapienza_sniper_10_targets.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_SNIPER_10_TARGETS_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 10
                    },
                    "Context": {
                        "Count": 0,
                        "TargetKilled": []
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemCategory",
                                                    "sniperrifle"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "sniper-pack", "live"]
            },
            {
                "Id": "de84711a-ea44-4f6c-88ad-10c04d8396a4",
                "Name": "UI_CHALLENGES_SAPIENZA_SNIPER_TWO_IN_ONE_NAME",
                "ImageName": "images/challenges/sapienza/sapienza_sniper_two_in_one.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_SNIPER_TWO_IN_ONE_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Is_DoubleKill": {
                            "$timer": {
                                "Condition": {
                                    "$after": 1
                                },
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        },
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Is_DoubleKill"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "sniper-pack", "live"]
            },
            {
                "Id": "f25801aa-8d17-46f1-b161-633d48c7b7af",
                "Name": "UI_CHALLENGES_SAPIENZA_SNIPER_SHOOT_AND_HIDE_NAME",
                "ImageName": "images/challenges/sapienza/sapienza_sniper_shoot_and_hide.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_SNIPER_SHOOT_AND_HIDE_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        {
                                            "$contains": [
                                                "$Value.KillItemCategory",
                                                "sniperrifle"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Target_Killed"
                            }
                        },
                        "Target_Killed": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Failure"
                            },
                            "DumpInOcean": {
                                "Transition": "Success"
                            },
                            "spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "sniper-pack", "live"]
            },
            {
                "Id": "f63622a7-50d6-4c9f-9365-212642fd2353",
                "Name": "UI_CHALLENGES_SAPIENZA_SNIPER_CHURCH_SNIPE_NAME",
                "ImageName": "images/challenges/sapienza/sapienza_sniper_church_snipe.jpg",
                "Description": "UI_CHALLENGES_SAPIENZA_SNIPER_CHURCH_SNIPE_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SNIPER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COASTALTOWN",
                "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Sniper_Position": {
                            "Kill": {
                                "Condition": {
                                    "$or": [
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.OutfitIsHitmanSuit",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.OutfitIsHitmanSuit",
                                                        true
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.SetPieceId",
                                                        "a84ba351-285a-4f07-8758-2d7640401aad"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "47_Not_In_Bell_Tower"
                                    ]
                                },
                                "Transition": "Start"
                            }
                        },
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "47_In_Bell_Tower"
                                    ]
                                },
                                "Transition": "Sniper_Position"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "sniper-pack", "live"]
            }
        ]
    },
    // Master Fortune Teller (Marrakesh)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
        "Image": "images/challenges/categories/packfortune/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "fortune-pack",
        "Description": "",
        "OrderIndex": 4.9,
        "Challenges": [
            {
                "Id": "e90f2c25-5b04-42bd-b4d4-1c030dcdf30a",
                "Name": "UI_CHALLENGES_FORTUNE_MASTER_FORTUNETELLER_NAME",
                "ImageName": "images/challenges/marrakech/fortune_master_fortuneteller.jpg",
                "Description": "UI_CHALLENGES_FORTUNE_MASTER_FORTUNETELLER_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["FIREARMS_HERO_RIFLE_FULLAUTO_016_SU_SKIN06"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MARRAKECH",
                "ParentLocationId": "LOCATION_PARENT_MARRAKECH",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "8b7f1ca7-c55f-4ed2-aa40-1fe79740e1f3",
                            "d78d63d2-e91a-4bc0-b515-33df0bd08c6d",
                            "d5305578-1f29-4fae-9317-3b464ac065c0",
                            "21d22564-6a84-4d53-b14a-0b40574d194a"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "fortune-pack", "live"]
            },
            {
                "Id": "21d22564-6a84-4d53-b14a-0b40574d194a",
                "Name": "UI_CHALLENGES_FORTUNE_SABER_KILL_NAME",
                "ImageName": "images/challenges/marrakech/fortune_saber_kill.jpg",
                "Description": "UI_CHALLENGES_FORTUNE_SABER_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MARRAKECH",
                "ParentLocationId": "LOCATION_PARENT_MARRAKECH",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "TargetGoal": 2
                    },
                    "Context": {
                        "Count": 0,
                        "TargetKilled": []
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.TargetGoal",
                            "text": "UI_CHALLENGES_FORTUNE_SABER_KILL_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "b38b0b62-8071-4761-b2a5-2f635cd8da1b",
                                                        "ca31c88f-d15e-407b-8407-231f1b068402"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "94f52181-b9ec-4363-baef-d53b4e424b74"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "dc4762e0-e58e-4336-a3c1-40646087267a"
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.TargetGoal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "fortune-pack", "live"]
            },
            {
                "Id": "8b7f1ca7-c55f-4ed2-aa40-1fe79740e1f3",
                "Name": "UI_CHALLENGES_FORTUNE_BECOME_FORTUNETELLER_NAME",
                "ImageName": "images/challenges/marrakech/fortune_become_fortuneteller.jpg",
                "Description": "UI_CHALLENGES_FORTUNE_BECOME_FORTUNETELLER_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MARRAKECH",
                "ParentLocationId": "LOCATION_PARENT_MARRAKECH",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "dc4762e0-e58e-4336-a3c1-40646087267a"
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f5ecade6-1a58-44d1-a457-7688746a988d"
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "fortune-pack", "live"]
            },
            {
                "Id": "d5305578-1f29-4fae-9317-3b464ac065c0",
                "Name": "UI_CHALLENGES_FORTUNE_AXE_KILL_NAME",
                "ImageName": "images/challenges/marrakech/fortune_axe_kill.jpg",
                "Description": "UI_CHALLENGES_FORTUNE_AXE_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MARRAKECH",
                "ParentLocationId": "LOCATION_PARENT_MARRAKECH",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "TargetGoal": 5
                    },
                    "Context": {
                        "Count": 0,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.KillItemRepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "58dceb1c-d7db-41dc-9750-55e3ab87fdf0",
                                                        "a8bc4325-718e-45ba-b0e4-000729c70ce4"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "dc4762e0-e58e-4336-a3c1-40646087267a"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.TargetGoal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "medium", "fortune-pack", "live"]
            },
            {
                "Id": "d78d63d2-e91a-4bc0-b515-33df0bd08c6d",
                "Name": "UI_CHALLENGES_FORTUNE_ACCEDENT_KILL_NAME",
                "ImageName": "images/challenges/marrakech/fortune_accedent_kill.jpg",
                "Description": "UI_CHALLENGES_FORTUNE_ACCEDENT_KILL_DESC",
                "Rewards": {
                   "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_FORTUNE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MARRAKECH",
                "ParentLocationId": "LOCATION_PARENT_MARRAKECH",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "TargetGoal": 5
                    },
                    "Context": {
                        "Count": 0,
                        "TargetKilled": []
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.TargetGoal",
                            "type": "challengecounter"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.SetPieceType"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.SetPieceType"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.Accident",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "dc4762e0-e58e-4336-a3c1-40646087267a"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceType",
                                                    "$Value.SetPieceType"
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillClass",
                                                        "explosion"
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "561a1e95-38c0-46a2-87c1-40e356fe7440"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "561a1e95-38c0-46a2-87c1-40e356fe7440"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "PushOver"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "dc4762e0-e58e-4336-a3c1-40646087267a"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "a30e6e87-1dfd-46ac-a770-1d0c4437e1b1"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "a30e6e87-1dfd-46ac-a770-1d0c4437e1b1"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.Accident",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "explosion"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "dc4762e0-e58e-4336-a3c1-40646087267a"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.TargetGoal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "fortune-pack", "live"]
            }
        ]
    },
    // Himmapan Horror (Bangkok)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
        "Image": "images/challenges/categories/packhorror/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "horror-pack",
        "Description": "",
        "OrderIndex": 4.91,
        "Challenges": [
            {
                "Id": "6c060113-ef9f-497d-ad4c-ac8464d08c7f",
                "Name": "UI_CHALLENGES_BANGKOK_HORROR_MASTER_REDRUM_NAME",
                "ImageName": "images/challenges/bangkok/horror_master_redrum.jpg",
                "Description": "UI_CHALLENGES_BANGKOK_HORROR_MASTER_REDRUM_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["PROP_MELEE_ANTIQUE_SYRINGE_LETHAL"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_BANGKOK",
                "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "4350c6b7-20c6-4d26-a0c0-f9761f939823",
                            "eb3039de-f0e3-44f5-85d2-83b9bc42627b",
                            "16d4b17d-ccc5-4d51-a27c-3d25c1b36fbb",
                            "8faaac29-153f-44c3-8c00-2ef8db4183c7"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "horror-pack", "live"]
            },
            {
                "Id": "16d4b17d-ccc5-4d51-a27c-3d25c1b36fbb",
                "Name": "UI_CHALLENGES_BANGKOK_HORROR_DROWN_KILL_NAME",
                "ImageName": "images/challenges/bangkok/horror_drown_kill.jpg",
                "Description": "UI_CHALLENGES_BANGKOK_HORROR_DROWN_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_BANGKOK",
                "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "FoundBodies": 0,
                        "ListBodiesFound": [],
                        "TargetGoal": 2,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "AccidentBodyFound": [
                                {
                                    "Actions": {
                                        "$inc": "FoundBodies",
                                        "$pushunique": [
                                            "ListBodiesFound",
                                            "$Value.DeadBody.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.DeadBody.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.TargetKilled"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.DeadBody.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.ListBodiesFound"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.FoundBodies",
                                            "$.TargetGoal"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "c96f9796-0194-47c6-836c-102473cc6c3c"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_drown"
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ],
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "horror-pack", "live"]
            },
            {
                "Id": "4350c6b7-20c6-4d26-a0c0-f9761f939823",
                "Name": "UI_CHALLENGES_BANGKOK_HORROR_AXE_KILL_NAME",
                "ImageName": "images/challenges/bangkok/horror_axe_kill.jpg",
                "Description": "UI_CHALLENGES_BANGKOK_HORROR_AXE_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_BANGKOK",
                "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "FoundBodies": 0,
                        "ListBodiesFound": [],
                        "TargetGoal": 4,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "BodyFound": [
                                {
                                    "Actions": {
                                        "$inc": "FoundBodies",
                                        "$pushunique": [
                                            "ListBodiesFound",
                                            "$Value.DeadBody.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.DeadBody.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.TargetKilled"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.DeadBody.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.ListBodiesFound"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.FoundBodies",
                                            "$.TargetGoal"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.KillItemRepositoryId"
                                                        ]
                                                    },
                                                    "in": [
                                                        "d2a7fa04-2cac-45d8-b696-47c566bb95ff",
                                                        "a8bc4325-718e-45ba-b0e4-000729c70ce4",
                                                        "3a8207bb-84f5-438f-8f30-5c83aef2af80"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "c96f9796-0194-47c6-836c-102473cc6c3c"
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ],
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "horror-pack", "live"]
            },
            {
                "Id": "8faaac29-153f-44c3-8c00-2ef8db4183c7",
                "Name": "UI_CHALLENGES_BANGKOK_HORROR_CLEAVER_KILL_NAME",
                "ImageName": "images/challenges/bangkok/horror_cleaver_kill.jpg",
                "Description": "UI_CHALLENGES_BANGKOK_HORROR_CLEAVER_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_BANGKOK",
                "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "ContextListeners": {
                        "FoundBodies": {
                            "count": "$.FoundBodies",
                            "total": "$.TargetGoal",
                            "type": "challengecounter"
                        }
                    },
                    "Context": {
                        "Count": 0,
                        "FoundBodies": 0,
                        "ListBodiesFound": [],
                        "TargetGoal": 5,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "BodyFound": [
                                {
                                    "Actions": {
                                        "$inc": "FoundBodies",
                                        "$pushunique": [
                                            "ListBodiesFound",
                                            "$Value.DeadBody.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.DeadBody.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.TargetKilled"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.DeadBody.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.ListBodiesFound"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.FoundBodies",
                                            "$.TargetGoal"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "1bbf0ed5-0515-4599-a4c9-454ce59cff44"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "c96f9796-0194-47c6-836c-102473cc6c3c"
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ],
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "hard", "horror-pack", "live"]
            },
            {
                "Id": "eb3039de-f0e3-44f5-85d2-83b9bc42627b",
                "Name": "UI_CHALLENGES_BANGKOK_HORROR_PUSHOVER_KILL_NAME",
                "ImageName": "images/challenges/bangkok/horror_pushover_kill.jpg",
                "Description": "UI_CHALLENGES_BANGKOK_HORROR_PUSHOVER_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HORROR",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_BANGKOK",
                "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "FoundBodies": 0,
                        "ListBodiesFound": [],
                        "TargetGoal": 3,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "AccidentBodyFound": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.DeadBody.RepositoryId"
                                                ]
                                            },
                                            "in": "$.ListBodiesFound"
                                        }
                                    },
                                    "Transition": "Start"
                                },
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "ListBodiesFound",
                                            "$Value.DeadBody.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$not": {
                                            "$any": {
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$Value.DeadBody.RepositoryId"
                                                    ]
                                                },
                                                "in": "$.ListBodiesFound"
                                            }
                                        }
                                    }
                                },
                                {
                                    "Actions": {
                                        "$inc": "FoundBodies"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.DeadBody.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.TargetKilled"
                                                }
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.DeadBody.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.ListBodiesFound"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.FoundBodies",
                                            "$.TargetGoal"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_push"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "c96f9796-0194-47c6-836c-102473cc6c3c"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Actions": {
                                        "$inc": "FoundBodies"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.TargetKilled"
                                                }
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.ListBodiesFound"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.FoundBodies",
                                            "$.TargetGoal"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Spotted": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "horror-pack", "live"]
            }
        ]
    },
    // Master Scarecrow (Colorado)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
        "Image": "images/challenges/categories/packscare/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "scare-pack",
        "Description": "",
        "OrderIndex": 4.92,
        "Challenges": [
            {
                "Id": "edf5ce47-019a-4f33-92b2-f29e637b11c8",
                "Name": "UI_CHALLENGES_COLORADO_SCARE_MASTER_SCARECROW_NAME",
                "ImageName": "images/challenges/colorado/scare_master_scarecrow.jpg",
                "Description": "UI_CHALLENGES_COLORADO_SCARE_MASTER_SCARECROW_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["FIREARMS_HERO_RIFLE_SEMIAUTO_011_SU_SKIN10"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLORADO",
                "ParentLocationId": "LOCATION_PARENT_COLORADO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "918f37eb-ceba-4f4c-b7f4-e0bc5dbfca05",
                            "2f1ef5b2-2df9-428f-ad62-9df951864152",
                            "ab5edd71-b1f9-416c-bd62-46129b75a1dc",
                            "eb981a7e-1d02-44e7-ba88-f83983a88b1e"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "very-hard", "scare-pack", "live"]
            },
            {
                "Id": "2f1ef5b2-2df9-428f-ad62-9df951864152",
                "Name": "UI_CHALLENGES_COLORADO_SCARE_AXE_KILL_NAME",
                "ImageName": "images/challenges/colorado/scare_axe_kill.jpg",
                "Description": "UI_CHALLENGES_COLORADO_SCARE_AXE_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLORADO",
                "ParentLocationId": "LOCATION_PARENT_COLORADO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "Goal": 1,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Check_IsDisguiseBlown": {
                            "$timer": {
                                "Condition": {
                                    "$after": 5
                                },
                                "Transition": "Start"
                            },
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "DisguiseBlown": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "ContainSituation"
                            }
                        },
                        "ContainSituation": {
                            "BrokenDisguiseCleared": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Scare_Kill": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "DeadlyThrow"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "369c68f7-cbef-4e45-83c7-8acd0dc2d237"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "ContainSituation"
                                }
                            ]
                        },
                        "Start": {
                            "DisguiseBlown": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "Scare_Kill"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "DeadlyThrow"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "369c68f7-cbef-4e45-83c7-8acd0dc2d237"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Check_IsDisguiseBlown"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "medium", "scare-pack", "live"]
            },
            {
                "Id": "918f37eb-ceba-4f4c-b7f4-e0bc5dbfca05",
                "Name": "UI_CHALLENGES_COLORADO_SCARE_BECOME_SCARECROW_NAME",
                "ImageName": "images/challenges/colorado/scare_become_scarecrow.jpg",
                "Description": "UI_CHALLENGES_COLORADO_SCARE_BECOME_SCARECROW_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLORADO",
                "ParentLocationId": "LOCATION_PARENT_COLORADO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["story", "medium", "scare-pack", "live"]
            },
            {
                "Id": "ab5edd71-b1f9-416c-bd62-46129b75a1dc",
                "Name": "UI_CHALLENGES_COLORADO_SCARE_POISON_KILL_NAME",
                "ImageName": "images/challenges/colorado/scare_poison_kill.jpg",
                "Description": "UI_CHALLENGES_COLORADO_SCARE_POISON_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLORADO",
                "ParentLocationId": "LOCATION_PARENT_COLORADO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "Goal": 2,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Check_IsDisguiseBlown": {
                            "$timer": {
                                "Condition": {
                                    "$after": 5
                                },
                                "Transition": "Start"
                            },
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "DisguiseBlown": {
                                "Actions": {
                                    "$inc": "Count"
                                },
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "ContainSituation"
                            }
                        },
                        "ContainSituation": {
                            "BrokenDisguiseCleared": [
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Transition": "Start"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Scare_Kill": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "injected_poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "ContainSituation"
                                }
                            ]
                        },
                        "Start": {
                            "DisguiseBlown": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "Scare_Kill"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "injected_poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Check_IsDisguiseBlown"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "scare-pack", "live"]
            },
            {
                "Id": "eb981a7e-1d02-44e7-ba88-f83983a88b1e",
                "Name": "UI_CHALLENGES_COLORADO_SCARE_FIRE_KILL_NAME",
                "ImageName": "images/challenges/colorado/scare_fire_kill.jpg",
                "Description": "UI_CHALLENGES_COLORADO_SCARE_FIRE_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SCARE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLORADO",
                "ParentLocationId": "LOCATION_PARENT_COLORADO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {
                        "Count": 0,
                        "Goal": 3,
                        "TargetKilled": []
                    },
                    "Scope": "session",
                    "States": {
                        "Check_IsDisguiseBlown": {
                            "$timer": {
                                "Condition": {
                                    "$after": 5
                                },
                                "Transition": "Start"
                            },
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "DisguiseBlown": {
                                "Actions": {
                                    "$inc": "Count"
                                },
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "ContainSituation"
                            }
                        },
                        "ContainSituation": {
                            "BrokenDisguiseCleared": [
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Transition": "Start"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Scare_Kill": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count",
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_burn"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "ContainSituation"
                                }
                            ]
                        },
                        "Start": {
                            "DisguiseBlown": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                    ]
                                },
                                "Transition": "Scare_Kill"
                            },
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "TargetKilled",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.TargetKilled"
                                                    }
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "fd5d2b9d-dcef-4596-a98a-5266a148c40c"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_burn"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Check_IsDisguiseBlown"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["story", "hard", "scare-pack", "live"]
            }
        ]
    },
    // The Art of Revenge (Hokkaido)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
        "Image": "images/challenges/categories/packbiker/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "biker-pack",
        "Description": "",
        "OrderIndex": 4.93,
        "Challenges": [
            {
                "Id": "0690d548-9870-48c9-9724-d6098d4ebaf1",
                "Name": "UI_CHALLENGES_HOKKAIDO_BIKER_MASTER_BIKER_NAME",
                "ImageName": "images/challenges/hokkaido/biker_master_biker.jpg",
                "Description": "UI_CHALLENGES_HOKKAIDO_BIKER_MASTER_BIKER_DESC",
                "Rewards": {
                    "MasteryXP": 8000
                },
                "Drops": ["PROP_MELEE_KATANA_ENGRAVED"
                ],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_HOKKAIDO",
                "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "RequiredChallenges": [
                            "978b9fe9-580f-4e13-a2ee-2a62f4bfe17d",
                            "c4ed5195-5f22-4a0d-960e-bca60088b1d7",
                            "1b9ed517-a655-446e-95a3-f70768174589",
                            "d0206dc4-c822-463c-b2cf-bec7c5cbd233"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "Scope": "hit",
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "?": {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    },
                                                    "in": "$.CompletedChallenges"
                                                }
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": [
                    "story",
                    "very-hard",
                    "biker-pack",
                    "live"
                ]
            },
            {
                "Id": "1b9ed517-a655-446e-95a3-f70768174589",
                "Name": "UI_CHALLENGES_HOKKAIDO_BIKER_KATANA_KILL_NAME",
                "ImageName": "images/challenges/hokkaido/biker_katana_kill.jpg",
                "Description": "UI_CHALLENGES_HOKKAIDO_BIKER_KATANA_KILL_DESC",
                "Rewards": {
               "MasteryXP": 5000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_HOKKAIDO",
                "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Disguise_On": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                true
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                            ]
                                        },
                                        {
                                            "$any": {
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$Value.KillItemRepositoryId"
                                                    ]
                                                },
                                                "in": [
                                                    "5631dace-7f4a-4df8-8e97-b47373b815ff",
                                                    "d439fb64-8713-4c54-a3f3-90730dbdf370"
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "Transition": "End_Contract"
                            }
                        },
                        "End_Contract": {
                            "ContractEnd": [
                                {
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                    ]
                                },
                                "Transition": "Disguise_On"
                            }
                        }
                    }
                },
                "Tags": [
                    "story",
                    "hard",
                    "biker-pack",
                    "live"
                ]
            },
            {
                "Id": "978b9fe9-580f-4e13-a2ee-2a62f4bfe17d",
                "Name": "UI_CHALLENGES_HOKKAIDO_BIKER_KNIFE_KILL_NAME",
                "ImageName": "images/challenges/hokkaido/biker_knife_kill.jpg",
                "Description": "UI_CHALLENGES_HOKKAIDO_BIKER_KNIFE_KILL_DESC",
                "Rewards": {
                   "MasteryXP": 2500
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_HOKKAIDO",
                "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Disguise_On": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                true
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillItemRepositoryId",
                                                "e17172cc-bf70-4df6-9828-d9856b1a24fd"
                                            ]
                                        },
                                        {
                                            "$any": {
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "DeadlyThrow"
                                                    ]
                                                },
                                                "in": "$Value.DamageEvents"
                                            }
                                        }
                                    ]
                                },
                                "Transition": "End_Contract"
                            }
                        },
                        "End_Contract": {
                            "ContractEnd": [
                                {
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                    ]
                                },
                                "Transition": "Disguise_On"
                            }
                        }
                    }
                },
                "Tags": [
                    "story",
                    "medium",
                    "biker-pack",
                    "live"
                ]
            },
            {
                "Id": "c4ed5195-5f22-4a0d-960e-bca60088b1d7",
                "Name": "UI_CHALLENGES_HOKKAIDO_BIKER_POISON_KILL_NAME",
                "ImageName": "images/challenges/hokkaido/biker_poison_kill.jpg",
                "Description": "UI_CHALLENGES_HOKKAIDO_BIKER_POISON_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 5000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_HOKKAIDO",
                "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Disguise_On": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                true
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillClass",
                                                "poison"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "End_Contract"
                            },
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "Poison_Kill"
                                    ]
                                },
                                "Transition": "End_Contract"
                            }
                        },
                        "End_Contract": {
                            "ContractEnd": [
                                {
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                    ]
                                },
                                "Transition": "Disguise_On"
                            }
                        }
                    }
                },
                "Tags": [
                    "story",
                    "hard",
                    "biker-pack",
                    "live"
                ]
            },
            {
                "Id": "d0206dc4-c822-463c-b2cf-bec7c5cbd233",
                "Name": "UI_CHALLENGES_HOKKAIDO_BIKER_DROWN_KILL_NAME",
                "ImageName": "images/challenges/hokkaido/biker_drown_kill.jpg",
                "Description": "UI_CHALLENGES_HOKKAIDO_BIKER_DROWN_KILL_DESC",
                "Rewards": {
                    "MasteryXP": 2500
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BIKER",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_HOKKAIDO",
                "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Disguise_On": {
                            "Disguise": {
                                "Transition": "Failure"
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                true
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.OutfitRepositoryId",
                                                "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillMethodStrict",
                                                "accident_drown"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "End_Contract"
                            }
                        },
                        "End_Contract": {
                            "ContractEnd": [
                                {
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": {
                                "Transition": "Failure"
                            }
                        },
                        "Start": {
                            "Disguise": {
                                "Condition": {
                                    "$eq": [
                                        "$Value",
                                        "8e01f48f-ef06-448c-9d22-5d58c4414968"
                                    ]
                                },
                                "Transition": "Disguise_On"
                            }
                        }
                    }
                },
                "Tags": [
                    "story",
                    "medium",
                    "biker-pack",
                    "live"
                ]
            }
        ]
    },
    // Shinobi (Hawke's Bay)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
        "Image": "images/challenges/categories/packnitrogen/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "nitrogen-pack",
        "Description": "",
        "OrderIndex": 4.94,
        "Challenges": [
            {
                "Id": "2ce55f03-7ff4-4218-8dff-2a05521e8585",
                "Name": "CHALLENGEPACK_NITROGEN_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackNitrogen/Nitrogen_Wrapper.jpg",
                "Description": "CHALLENGEPACK_NITROGEN_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_TANTO"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "3be7a0d1-359a-4b42-86d2-c42a6169bc34",
                            "37a8c51a-c125-4865-896a-abba80b88cf3",
                            "93899956-ce09-400c-b3c8-49da63f1f333",
                            "0f5f5a0f-fc01-4b10-9c15-e4089c431fd2"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["nitrogen-pack", "story", "hard"]
            },
            {
                "Id": "0f5f5a0f-fc01-4b10-9c15-e4089c431fd2",
                "Name": "CHALLENGEPACK_NITROGEN_NINJA_NAME",
                "ImageName": "images/challenges/Categories/PackNitrogen/Nitrogen_Ninja.jpg",
                "Description": "CHALLENGEPACK_NITROGEN_NINJA_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredWeapons": [
                            "e55eb9a4-e79c-43c7-970b-79e94e7683b7",
                            "5631dace-7f4a-4df8-8e97-b47373b815ff"
                        ],
                        "RequiredTargetCount": 10
                    },
                    "Context": {
                        "KilledTargetCount": 0
                    },
                    "ContextListeners": {
                        "KilledTargetCount": {
                            "type": "challengecounter",
                            "count": "$.KilledTargetCount",
                            "total": "$.RequiredTargetCount"
                        }
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.KillItemRepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.RequiredWeapons"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "KilledTargetCount"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.KilledTargetCount",
                                            "$.RequiredTargetCount"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["nitrogen-pack", "story", "live", "easy"]
            },
            {
                "Id": "37a8c51a-c125-4865-896a-abba80b88cf3",
                "Name": "CHALLENGEPACK_NITROGEN_KNIFEKILL_NAME",
                "ImageName": "images/challenges/Categories/PackNitrogen/Nitrogen_KnifeKill.jpg",
                "Description": "CHALLENGEPACK_NITROGEN_KNIFEKILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Context": {
                        "TargetKilled": false
                    },
                    "States": {
                        "Start": {
                            "ContractEnd": {
                                "Condition": {
                                    "$eq": ["$.TargetKilled", true]
                                },
                                "Transition": "Success"
                            },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "5631dace-7f4a-4df8-8e97-b47373b815ff"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitIsHitmanSuit",
                                                    true
                                                ]
                                            }
                                        ]
                                    },
                                    "$set": ["TargetKilled", true]
                                }
                            ],
                            "BodyFound": {
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["nitrogen-pack", "story", "live", "medium"]
            },
            {
                "Id": "3be7a0d1-359a-4b42-86d2-c42a6169bc34",
                "Name": "CHALLENGEPACK_NITROGEN_EXPLOSIVEKILL_NAME",
                "ImageName": "images/challenges/Categories/PackNitrogen/Nitrogen_ExplosiveKill.jpg",
                "Description": "CHALLENGEPACK_NITROGEN_EXPLOSIVEKILL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "explosion"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "CheckDeath"
                                }
                            ]
                        },
                        "CheckDeath": {
                            "$timer": {
                                "Condition": {
                                    "$after": 1
                                },
                                "Transition": "Success"
                            },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$not": {
                                            "$eq": ["$Value.IsTarget", true]
                                        }
                                    },
                                    "Transition": "Failure"
                                }
                            ],
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$not": {
                                            "$eq": ["$Value.IsTarget", true]
                                        }
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["nitrogen-pack", "story", "live", "medium"]
            },
            {
                "Id": "93899956-ce09-400c-b3c8-49da63f1f333",
                "Name": "CHALLENGEPACK_NITROGEN_NINJASNIPER_NAME",
                "ImageName": "images/challenges/Categories/PackNitrogen/Nitrogen_NinjaSniper.jpg",
                "Description": "CHALLENGEPACK_NITROGEN_NINJASNIPER_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NITROGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.name_metricvalue",
                                        "ActorPacifiedByAquarium"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["nitrogen-pack", "story", "live", "easy"]
            }
        ]
    },
    // Thriller Night (Hawke's Bay)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
        "Image": "images/challenges/categories/packoxygen/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "oxygen-pack",
        "Description": "",
        "OrderIndex": 4.95,
        "Challenges": [
            {
                "Id": "5173195c-2b19-445f-8840-75c6fbb8d702",
                "Name": "CHALLENGEPACK_OXYGEN_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackOxygen/Oxygen_Wrapper.jpg",
                "Description": "CHALLENGEPACK_OXYGEN_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_TOOL_SQUEAKY_TOY_KIWI"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "d260587d-fa93-48c3-bfe2-f71c588a7fbe",
                            "e605092c-6ce9-4e4d-8acb-316e8552868d",
                            "980405cb-2a9d-4e45-8112-08875c0ad773",
                            "5012d3aa-5d28-4b7b-83aa-d388862bc3b9"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["oxygen-pack", "story", "hard"]
            },
            {
                "Id": "5012d3aa-5d28-4b7b-83aa-d388862bc3b9",
                "Name": "CHALLENGEPACK_OXYGEN_SHOTGUN_NAME",
                "ImageName": "images/challenges/Categories/PackOxygen/Oxygen_Shotgun.jpg",
                "Description": "CHALLENGEPACK_OXYGEN_SHOTGUN_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "GuardsRequired": 5,
                        "EligibleGuards": [
                            "edf64cae-98b1-496e-8b13-31b8e65ccb7e",
                            "77fea61d-7993-486c-a5d5-71a6e55d414c",
                            "6024f334-d840-4418-b3b0-12a2870150c4",
                            "7762eb11-138c-4d5b-bf3c-f28921cfa0e0",
                            "020cded4-84d2-48f8-a593-a13b60574cf0",
                            "dbebec2f-5a75-4713-bb08-c32f141bc9a5",
                            "2458ad3d-1131-4dc8-a52b-101065b55f2c",
                            "c8c6979e-2b8b-48cc-b405-7f1138b88e8c",
                            "afbfb9f3-e629-44f4-bb6d-3537fb94898a",
                            "a58ae30e-00ad-42ec-949d-1d6c5fe1bb47",
                            "4e98437d-49e2-4cbd-a081-6c3f34c7797d",
                            "8c5143d6-ac75-44a5-a67c-cd4cd4304e4a",
                            "d0c2aa29-763e-45dc-a8fb-41d05322de9e",
                            "1e6be31a-a6f6-4b61-b7fa-6e37d4b69a2c",
                            "f0db3e8b-cf65-4c65-b607-f77284a0f644",
                            "e77866f1-f51e-4be8-948d-2ce53289f588",
                            "dddfaa8a-b4bc-42b4-a0ce-c44b1d1af75a",
                            "e82f3d7f-4e8c-452f-97ae-b0a413cd0d14",
                            "b8936aed-f498-403f-9167-d39ab02419b4",
                            "77853169-4a3f-40de-90c3-e7b8fc09cc70",
                            "c04e1fe2-9227-4c86-9068-8ef098d89b57",
                            "9a469cd6-0689-49af-86ea-1a2d7022a1e5",
                            "0ec76339-0fd9-4c83-9368-f235b66b3fa0",
                            "e2196d59-c5fe-43e0-b7e8-508bde38cb67",
                            "47c00c25-953a-45da-86e0-3fcdadea3487",
                            "71d833e8-5f8d-4cd5-8dc8-48d5097f71e9",
                            "6d64c21b-1ae4-47a8-aceb-120cb68ae362",
                            "3b1bffed-bbcf-446e-8824-5855f9df7714",
                            "0037cdef-80c5-40aa-85f8-1a28588ae954",
                            "f1408061-856f-4017-a922-b297d72d1fb0",
                            "e1363159-b0aa-40b5-bf01-a3ad41a5230d",
                            "0b6e8324-8118-40b4-b0b8-4d75d03ff37f",
                            "d37dbe48-0cd8-480d-9d61-28fe8057d3e1"
                        ]
                    },
                    "Context": {
                        "GuardsEliminated": 0
                    },
                    "ContextListeners": {
                        "GuardsEliminated": {
                            "count": "$.GuardsEliminated",
                            "total": "$.GuardsRequired",
                            "type": "challengecounter"
                        }
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "901a3b51-51a0-4236-bdf2-23d20696b358"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.EligibleGuards"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "GuardsEliminated"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.GuardsEliminated",
                                            "$.GuardsRequired"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Spotted": {
                                "Actions": {
                                    "$set": ["GuardsEliminated", 0]
                                }
                            }
                        }
                    }
                },
                "Tags": ["oxygen-pack", "story", "live", "medium"]
            },
            {
                "Id": "980405cb-2a9d-4e45-8112-08875c0ad773",
                "Name": "CHALLENGEPACK_OXYGEN_POOL_NAME",
                "ImageName": "images/challenges/Categories/PackOxygen/Oxygen_Pool.jpg",
                "Description": "CHALLENGEPACK_OXYGEN_POOL_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_push"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "TargetDumped"
                                }
                            ],
                            "DumpInOcean": {
                                "Transition": "ActorInPool"
                            }
                        },
                        "TargetDumped": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Failure"
                            },
                            "DumpInOcean": {
                                "Transition": "Success"
                            }
                        },
                        "ActorInPool": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Start"
                            },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_push"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["oxygen-pack", "story", "live", "medium"]
            },
            {
                "Id": "d260587d-fa93-48c3-bfe2-f71c588a7fbe",
                "Name": "CHALLENGEPACK_OXYGEN_LEDGE_NAME",
                "ImageName": "images/challenges/Categories/PackOxygen/Oxygen_Ledge.jpg",
                "Description": "CHALLENGEPACK_OXYGEN_LEDGE_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillMethodStrict",
                                                    "accident_push"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "TargetDumped"
                                }
                            ],
                            "DumpInOcean": {
                                "Transition": "ActorInPool"
                            }
                        },
                        "TargetDumped": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Success"
                            },
                            "DumpInOcean": {
                                "Transition": "Start"
                            }
                        },
                        "ActorInPool": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Start"
                            }
                        }
                    }
                },
                "Tags": ["oxygen-pack", "story", "live", "easy"]
            },
            {
                "Id": "e605092c-6ce9-4e4d-8acb-316e8552868d",
                "Name": "CHALLENGEPACK_OXYGEN_SCISSORS_NAME",
                "ImageName": "images/challenges/Categories/PackOxygen/Oxygen_Scissors.jpg",
                "Description": "CHALLENGEPACK_OXYGEN_SCISSORS_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_OXYGEN",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NEWZEALAND",
                "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "6ecf1f15-453c-4783-9c70-8777c83934d7"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["oxygen-pack", "story", "live", "easy"]
            }
        ]
    },
    // Fishy Buisness (Miami)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
        "Image": "images/challenges/categories/packhelium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "helium-pack",
        "Description": "",
        "OrderIndex": 4.96,
        "Challenges": [
            {
                "Id": "4cf0a53b-998c-4bc2-a1e4-0129f60620a7",
                "Name": "CHALLENGEPACK_HELIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_HELIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_FISHING_LINE"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "d227d468-5ec0-474a-b9cd-fc68f078f055",
                            "9cf5e843-1a4e-46d2-8fce-bd65b8366690",
                            "7dc50736-4db4-4329-a9d9-b5e3fdb5e3f4",
                            "d6f03a4f-c386-455e-839a-30f064bf800e",
                            "f86a8cf9-8f90-4cd5-8d98-f78737f21a82"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "hard"]
            },
            {
                "Id": "7dc50736-4db4-4329-a9d9-b5e3fdb5e3f4",
                "Name": "CHALLENGEPACK_HELIUM_MOVEFISH_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_MoveFish.jpg",
                "Description": "CHALLENGEPACK_HELIUM_MOVEFISH_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredFishCount": 3
                    },
                    "Context": {
                        "CurrentFishCount": 0
                    },
                    "ContextListeners": {
                        "CurrentFishCount": {
                            "type": "challengecounter",
                            "count": "$.CurrentFishCount",
                            "total": "$.RequiredFishCount"
                        }
                    },
                    "States": {
                        "Start": {
                            "FishSavedEvent": [
                                {
                                    "Actions": {
                                        "$inc": "CurrentFishCount"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$ge": [
                                            "$.CurrentFishCount",
                                            "$.RequiredFishCount"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "live", "medium"]
            },
            {
                "Id": "9cf5e843-1a4e-46d2-8fce-bd65b8366690",
                "Name": "CHALLENGEPACK_HELIUM_SHARKFROMABOVE_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_SharkFromAbove.jpg",
                "Description": "CHALLENGEPACK_HELIUM_SHARKFROMABOVE_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredTargets": [
                            "36b85be9-4c56-491a-8413-4d3292b596e9",
                            "ab2f84f7-5429-4c3a-9726-b770f9d693ee"
                        ]
                    },
                    "Context": {
                        "KilledTargets": []
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.RequiredTargets"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceId",
                                                    "b91b6766-233c-43c0-96dc-d64a588207fd"
                                                ]
                                            }
                                        ]
                                    },
                                    "$pushunique": [
                                        "KilledTargets",
                                        "$Value.RepositoryId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.KilledTargets).Count",
                                            "($.RequiredTargets).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.RequiredTargets"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.SetPieceId",
                                                        "b91b6766-233c-43c0-96dc-d64a588207fd"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "live", "easy"]
            },
            {
                "Id": "d227d468-5ec0-474a-b9cd-fc68f078f055",
                "Name": "CHALLENGEPACK_HELIUM_BIGGERFISH_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_BiggerFish.jpg",
                "Description": "CHALLENGEPACK_HELIUM_BIGGERFISH_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "f3e796af-bc6f-41db-8694-1424235250e7"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.SetPieceId",
                                                    "f39a1df6-b57c-4020-9dad-5df2f411e6f5"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "live", "easy"]
            },
            {
                "Id": "d6f03a4f-c386-455e-839a-30f064bf800e",
                "Name": "CHALLENGEPACK_HELIUM_SLEEPWITHFISH_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_SleepWithFish.jpg",
                "Description": "CHALLENGEPACK_HELIUM_SLEEPWITHFISH_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "SleepWithTheFishes": {
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "live", "hard"]
            },
            {
                "Id": "f86a8cf9-8f90-4cd5-8d98-f78737f21a82",
                "Name": "CHALLENGEPACK_HELIUM_FISHATTACK_NAME",
                "ImageName": "images/challenges/Categories/PackHelium/Helium_FishAttack.jpg",
                "Description": "CHALLENGEPACK_HELIUM_FISHATTACK_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_HELIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredTargets": [
                            "ee454990-0c4b-49e5-9572-a67887325283",
                            "c0ab162c-1502-40d5-801f-c5471289d6b7"
                        ]
                    },
                    "Context": {
                        "PacifiedTargets": []
                    },
                    "ContextListeners": {
                        "PacifiedTargets": {
                            "type": "challengecounter",
                            "count": "($.PacifiedTargets).Count",
                            "total": "($.RequiredTargets).Count"
                        }
                    },
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "4d0d6b2a-dd81-474c-a412-3bf19af8233d"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.RequiredTargets"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$pushunique": [
                                            "PacifiedTargets",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.PacifiedTargets).Count",
                                            "($.RequiredTargets).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["helium-pack", "story", "live", "hard"]
            }
        ]
    },
    // Spring Breaker (Miami)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
        "Image": "images/challenges/categories/packchlorine/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "chlorine-pack",
        "OrderIndex": 4.97,
        "Description": "",
        "Challenges": [
            {
                "Id": "b65ea4f2-1d74-4937-97bc-a9beeec71f34",
                "Name": "CHALLENGEPACK_CHLORINE_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackChlorine/Chlorine_Wrapper.jpg",
                "Description": "CHALLENGEPACK_CHLORINE_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["TOKEN_OUTFIT_REWARD_CHLORINE_FLAMINGO_SUIT"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "0f78b061-9c59-4f1a-b9bc-f29ed8cfaefa",
                            "e2835c6d-088a-4f88-987e-c4b9c9f9baaa",
                            "5d556d3a-6c7e-4a21-871a-e3bf4b88ece4",
                            "8e5465a9-e200-422f-b5d2-4e744e1bddf0"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["chlorine-pack", "story", "hard"]
            },
            {
                "Id": "0f78b061-9c59-4f1a-b9bc-f29ed8cfaefa",
                "Name": "CHALLENGEPACK_CHLORINE_REFLECTION_NAME",
                "ImageName": "images/challenges/Categories/PackChlorine/Chlorine_Reflection.jpg",
                "Description": "CHALLENGEPACK_CHLORINE_REFLECTION_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredOutfit": "124d145e-469e-485d-a628-ced82ddf1b75"
                    },
                    "States": {
                        "Start": {
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "$.RequiredOutfit"
                                        ]
                                    },
                                    "Transition": "CorrectOutfit"
                                }
                            ]
                        },
                        "CorrectOutfit": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "78adb05a-9593-4575-ac39-e4defb78d4ce"
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$not": {
                                            "$eq": [
                                                "$Value",
                                                "$.RequiredOutfit"
                                            ]
                                        }
                                    },
                                    "Transition": "Start"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["chlorine-pack", "story", "live", "easy"]
            },
            {
                "Id": "5d556d3a-6c7e-4a21-871a-e3bf4b88ece4",
                "Name": "CHALLENGEPACK_CHLORINE_SUGAR_NAME",
                "ImageName": "images/challenges/Categories/PackChlorine/Chlorine_Sugar.jpg",
                "Description": "CHALLENGEPACK_CHLORINE_SUGAR_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredSugarCount": 2
                    },
                    "Context": {
                        "CurrentSugarCount": 0
                    },
                    "ContextListeners": {
                        "CurrentSugarCount": {
                            "type": "challengecounter",
                            "count": "$.CurrentSugarCount",
                            "total": "$.RequiredSugarCount"
                        }
                    },
                    "States": {
                        "Start": {
                            "SugarEvent": [
                                {
                                    "Actions": {
                                        "$inc": "CurrentSugarCount"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$ge": [
                                            "$.CurrentSugarCount",
                                            "$.RequiredSugarCount"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["chlorine-pack", "story", "live", "medium"]
            },
            {
                "Id": "8e5465a9-e200-422f-b5d2-4e744e1bddf0",
                "Name": "CHALLENGEPACK_CHLORINE_AUSTRALIA_NAME",
                "ImageName": "images/challenges/Categories/PackChlorine/Chlorine_Australia.jpg",
                "Description": "CHALLENGEPACK_CHLORINE_AUSTRALIA_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "74b04d1f-8ac9-46a0-9a6c-8579cf03276f"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["chlorine-pack", "story", "live", "easy"]
            },
            {
                "Id": "e2835c6d-088a-4f88-987e-c4b9c9f9baaa",
                "Name": "CHALLENGEPACK_CHLORINE_SHREDDER_NAME",
                "ImageName": "images/challenges/Categories/PackChlorine/Chlorine_Shredder.jpg",
                "Description": "CHALLENGEPACK_CHLORINE_SHREDDER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_CHLORINE",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_MIAMI",
                "ParentLocationId": "LOCATION_PARENT_MIAMI",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "58c3b7bc-8d89-48f8-927a-d9b4b7fdd8e4"
                                    ]
                                },
                                "Transition": "Shredder"
                            }
                        },
                        "Shredder": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Start"
                            },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": ["$Value.IsTarget", true]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["chlorine-pack", "story", "live", "hard"]
            }
        ]
    },
    // Shaman Shenanagins (Santa Fortuna)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
        "Image": "images/challenges/categories/packlithium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "lithium-pack",
        "Description": "",
        "OrderIndex": 4.98,
        "Challenges": [
            {
                "Id": "da7a46a7-95fa-4bb9-a5d3-d0fdfd911fcf",
                "Name": "CHALLENGEPACK_LITHIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
               "Drops": ["PROP_EXPLOSIVE_SHAMAN_POWDER"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "8cc79602-74aa-4ef6-a6a8-c1848df3ef5f",
                            "9a6377ac-5e72-426f-aa15-090d358349c0",
                            "6a3c3481-167e-4333-8776-038c8ba074a2",
                            "8795532f-c394-45ab-bd92-fb7967ef201b",
                            "b7036c20-0778-4509-b041-c7146d226382"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "hard"]
            },
            {
                "Id": "6a3c3481-167e-4333-8776-038c8ba074a2",
                "Name": "CHALLENGEPACK_LITHIUM_FIBREWIRE_ALTAR_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_Fibrewire_Altar.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_FIBREWIRE_ALTAR_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_ShamanFibreWire_Ruins"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "live", "hard"]
            },
            {
                "Id": "8795532f-c394-45ab-bd92-fb7967ef201b",
                "Name": "CHALLENGEPACK_LITHIUM_COCAFIELD_GUARDS_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_Cocafields.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_COCAFIELD_GUARDS_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 10
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_LITHIUM_COCAFIELD_GUARDS_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_CocafieldKill": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "live", "hard"]
            },
            {
                "Id": "8cc79602-74aa-4ef6-a6a8-c1848df3ef5f",
                "Name": "CHALLENGEPACK_LITHIUM_POISON_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_Poison.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_POISON_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 5
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter",
                            "text": "CHALLENGEPACK_LITHIUM_POISON_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "30005896-2b39-49c0-bb04-3475d4a12ae6"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "poison"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "live", "easy"]
            },
            {
                "Id": "9a6377ac-5e72-426f-aa15-090d358349c0",
                "Name": "CHALLENGEPACK_LITHIUM_CONSTRUCTIONPIT_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_ConstPit.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_CONSTRUCTIONPIT_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 3
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_LITHIUM_CONSTRUCTIONPIT_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_ConstructionPit_Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "live", "medium"]
            },
            {
                "Id": "b7036c20-0778-4509-b041-c7146d226382",
                "Name": "CHALLENGEPACK_LITHIUM_SHOPPING_LIST_NAME",
                "ImageName": "images/challenges/Categories/PackLithium/Lithium_Shopping.jpg",
                "Description": "CHALLENGEPACK_LITHIUM_SHOPPING_LIST_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_LITHIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 4
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_LITHIUM_SHOPPING_LIST_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_ListItem_Got": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["lithium-pack", "story", "live", "easy"]
            }
        ]
    },
    // I'm With The Band (Santa Fortuna)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
        "Image": "images/challenges/categories/packneon/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "neon-pack",
        "Description": "",
        "OrderIndex": 4.99,
        "Challenges": [
            {
                "Id": "cc1284f8-d7b3-4568-a118-ecc1e282c73d",
                "Name": "CHALLENGEPACK_NEON_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_Wrapper.jpg",
                "Description": "CHALLENGEPACK_NEON_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_VIOLIN_SMALL"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "3ac7313a-2ddb-4c29-a267-14ee714e2e71",
                            "97efe9ca-53d1-4454-a21c-54d22355c8d0",
                            "a799a65b-4bee-4814-8390-0fecac34113b",
                            "c392699f-5aeb-446a-9929-758160fe5518",
                            "83fcc1d0-a78b-4b34-b496-61642fba1b47"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "hard"]
            },
            {
                "Id": "3ac7313a-2ddb-4c29-a267-14ee714e2e71",
                "Name": "CHALLENGEPACK_NEON_EXPLOSIVE_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_Explosive.jpg",
                "Description": "CHALLENGEPACK_NEON_EXPLOSIVE_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_Bass_Dropped"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "live", "easy"]
            },
            {
                "Id": "83fcc1d0-a78b-4b34-b496-61642fba1b47",
                "Name": "CHALLENGEPACK_NEON_JAM_SESSION_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_JamSession.jpg",
                "Description": "CHALLENGEPACK_NEON_JAM_SESSION_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_BandPractice"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "live", "hard"]
            },
            {
                "Id": "97efe9ca-53d1-4454-a21c-54d22355c8d0",
                "Name": "CHALLENGEPACK_NEON_STRUNG_OUT_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_StrungOut.jpg",
                "Description": "CHALLENGEPACK_NEON_STRUNG_OUT_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_Cello_Played"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "live", "medium"]
            },
            {
                "Id": "a799a65b-4bee-4814-8390-0fecac34113b",
                "Name": "CHALLENGEPACK_NEON_DROP_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_Drop.jpg",
                "Description": "CHALLENGEPACK_NEON_DROP_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 3
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_NEON_DROP_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_Musician_Bricked": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "live", "hard"]
            },
            {
                "Id": "c392699f-5aeb-446a-9929-758160fe5518",
                "Name": "CHALLENGEPACK_NEON_AFTERPARTY_NAME",
                "ImageName": "images/challenges/Categories/PackNeon/Neon_Afterparty.jpg",
                "Description": "CHALLENGEPACK_NEON_AFTERPARTY_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_NEON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_COLOMBIA",
                "ParentLocationId": "LOCATION_PARENT_COLOMBIA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_PostGig_Drinks"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["neon-pack", "story", "live", "easy"]
            }
        ]
    },
    // Mumbai Master (Mumbai)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
        "Image": "images/challenges/categories/packsodium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "sodium-pack",
        "Description": "",
        "OrderIndex": 4.992,
        "Challenges": [
            {
                "Id": "a271477b-8af9-4862-a7c6-101d5bd884bd",
                "Name": "CHALLENGEPACK_SODIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_SODIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_ANTIQUE_KNIFE_CURVED"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "22474e66-dc60-40eb-938d-402bd153b4e6",
                            "63955a0c-242c-423e-afef-66e9bc81bed0"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "hard"]
            },
            {
                "Id": "22474e66-dc60-40eb-938d-402bd153b4e6",
                "Name": "CHALLENGEPACK_SODIUM_FISH_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Fish.jpg",
                "Description": "CHALLENGEPACK_SODIUM_FISH_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredFishCount": 3
                    },
                    "Context": {
                        "CurrentFishCount": 0
                    },
                    "ContextListeners": {
                        "CurrentFishCount": {
                            "type": "challengecounter",
                            "count": "$.CurrentFishCount",
                            "total": "$.RequiredFishCount"
                        }
                    },
                    "States": {
                        "Start": {
                            "FishInFurnace": [
                                {
                                    "Actions": {
                                        "$inc": "CurrentFishCount"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$ge": [
                                            "$.CurrentFishCount",
                                            "$.RequiredFishCount"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "live", "medium"]
            },
            {
                "Id": "63955a0c-242c-423e-afef-66e9bc81bed0",
                "Name": "CHALLENGEPACK_SODIUM_SPAGHETTI_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Spaghetti.jpg",
                "Description": "CHALLENGEPACK_SODIUM_SPAGHETTI_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "ac77e98d-4ffa-4755-80fc-cd6e7adc63fb"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "live", "easy"]
            }
        ]
    },
    // The Culinary Trip (Mumbai)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
        "Image": "images/challenges/categories/packsodium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "sodium-pack",
        "Description": "",
        "OrderIndex": 4.992,
        "Challenges": [
            {
                "Id": "a271477b-8af9-4862-a7c6-101d5bd884bd",
                "Name": "CHALLENGEPACK_SODIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_SODIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_ANTIQUE_KNIFE_CURVED"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "22474e66-dc60-40eb-938d-402bd153b4e6",
                            "63955a0c-242c-423e-afef-66e9bc81bed0"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "hard"]
            },
            {
                "Id": "22474e66-dc60-40eb-938d-402bd153b4e6",
                "Name": "CHALLENGEPACK_SODIUM_FISH_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Fish.jpg",
                "Description": "CHALLENGEPACK_SODIUM_FISH_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredFishCount": 3
                    },
                    "Context": {
                        "CurrentFishCount": 0
                    },
                    "ContextListeners": {
                        "CurrentFishCount": {
                            "type": "challengecounter",
                            "count": "$.CurrentFishCount",
                            "total": "$.RequiredFishCount"
                        }
                    },
                    "States": {
                        "Start": {
                            "FishInFurnace": [
                                {
                                    "Actions": {
                                        "$inc": "CurrentFishCount"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$ge": [
                                            "$.CurrentFishCount",
                                            "$.RequiredFishCount"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "live", "medium"]
            },
            {
                "Id": "63955a0c-242c-423e-afef-66e9bc81bed0",
                "Name": "CHALLENGEPACK_SODIUM_SPAGHETTI_NAME",
                "ImageName": "images/challenges/Categories/PackSodium/Sodium_Spaghetti.jpg",
                "Description": "CHALLENGEPACK_SODIUM_SPAGHETTI_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_SODIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_MUMBAI",
                "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "ac77e98d-4ffa-4755-80fc-cd6e7adc63fb"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["sodium-pack", "story", "live", "easy"]
            }
        ]
    },
    // Muffin Man (Whittleton Creek)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
        "Image": "images/challenges/categories/packboron/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "boron-pack",
        "Description": "",
        "OrderIndex": 4.993,
        "Challenges": [
            {
                "Id": "4407818e-838d-4fc4-ac56-bcb865d507e2",
                "Name": "CHALLENGEPACK_BORON_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_Wrapper.jpg",
                "Description": "CHALLENGEPACK_BORON_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_MUFFIN_BLUEBERRY"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "ae7ded57-b090-4fe2-a514-31213619f47c",
                            "28b56e68-ebe6-450a-bf46-eba702f764e2",
                            "043f53b3-15ed-40ff-af46-51f03ce398ae",
                            "56496d61-ae8e-48ef-8871-b0e913cb729f",
                            "dadd5460-cfe9-46a5-af92-7635651eb4d8"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "hard"]
            },
            {
                "Id": "043f53b3-15ed-40ff-af46-51f03ce398ae",
                "Name": "CHALLENGEPACK_BORON_KILLMUFFINWORKERS_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_KillMuffinWorkers.jpg",
                "Description": "CHALLENGEPACK_BORON_KILLMUFFINWORKERS_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredTargets": [
                            "3880a7bb-7b59-4a0c-87f2-590e87ccb1ce",
                            "eceef7f6-d43d-4435-a088-0c686cf202dc",
                            "233503c3-d3bd-4900-b501-90d4c95b03d4",
                            "a07921d5-b47e-4f0a-b8a7-3a5f0d6f0f5a"
                        ],
                        "RequiredTargetCount": 4
                    },
                    "Context": {
                        "PacifiedTargets": []
                    },
                    "ContextListeners": {
                        "PacifiedTargets": {
                            "type": "challengecounter",
                            "count": "($.PacifiedTargets).Count",
                            "total": "($.RequiredTargets).Count"
                        }
                    },
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            },
                                            "in": "$.RequiredTargets"
                                        }
                                    },
                                    "Actions": {
                                        "$pushunique": [
                                            "PacifiedTargets",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.PacifiedTargets).Count",
                                            "($.RequiredTargets).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "856b2aa2-e224-48c3-b890-01fdf4dba6de"
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "live", "easy"]
            },
            {
                "Id": "28b56e68-ebe6-450a-bf46-eba702f764e2",
                "Name": "CHALLENGEPACK_BORON_FINDCLUES_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_FindClues.jpg",
                "Description": "CHALLENGEPACK_BORON_FINDCLUES_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredOutfit": "5d19c9f8-7df2-4113-b81d-b32d5e231717",
                        "Goal": 3
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal"
                        }
                    },
                    "States": {
                        "Start": {
                            "ContractStart": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.Disguise",
                                            "$.RequiredOutfit"
                                        ]
                                    },
                                    "Transition": "CorrectOutfit"
                                }
                            ],
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "$.RequiredOutfit"
                                        ]
                                    },
                                    "Transition": "CorrectOutfit"
                                }
                            ]
                        },
                        "CorrectOutfit": {
                            "One_Clue_Found": {
                                "Actions": {
                                    "$inc": "Count"
                                }
                            },
                            "Two_Clues_Found": {
                                "Actions": {
                                    "$inc": "Count"
                                }
                            },
                            "Three_Clues_Found": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$not": {
                                            "$eq": [
                                                "$Value",
                                                "$.RequiredOutfit"
                                            ]
                                        }
                                    },
                                    "Transition": "Start"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "live", "medium"]
            },
            {
                "Id": "56496d61-ae8e-48ef-8871-b0e913cb729f",
                "Name": "CHALLENGEPACK_BORON_GARBAGE_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_Garbage.jpg",
                "Description": "CHALLENGEPACK_BORON_GARBAGE_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredOutfit": "5d19c9f8-7df2-4113-b81d-b32d5e231717"
                    },
                    "States": {
                        "Start": {
                            "ContractStart": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.Disguise",
                                            "$.RequiredOutfit"
                                        ]
                                    },
                                    "Transition": "CorrectOutfit"
                                }
                            ],
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value",
                                            "$.RequiredOutfit"
                                        ]
                                    },
                                    "Transition": "CorrectOutfit"
                                }
                            ]
                        },
                        "CorrectOutfit": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "2b01e2d0-f302-4b8a-822b-867ba9728f76"
                                    ]
                                },
                                "Transition": "CheckBody"
                            },
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$not": {
                                            "$eq": [
                                                "$Value",
                                                "$.RequiredOutfit"
                                            ]
                                        }
                                    },
                                    "Transition": "Start"
                                }
                            ]
                        },
                        "CheckBody": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "CorrectOutfit"
                            },
                            "Kill": {
                                "Condition": {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "live", "hard"]
            },
            {
                "Id": "ae7ded57-b090-4fe2-a514-31213619f47c",
                "Name": "CHALLENGEPACK_BORON_MUFFINPACIFY_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_MuffinPacify.jpg",
                "Description": "CHALLENGEPACK_BORON_MUFFINPACIFY_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "Goal": 5
                    },
                    "Context": {
                        "PeopleKnocked": 0
                    },
                    "ContextListeners": {
                        "PeopleKnocked": {
                            "type": "challengecounter",
                            "count": "$.PeopleKnocked",
                            "total": "$.Goal"
                        }
                    },
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.KillItemRepositoryId",
                                            "5952b621-fee9-4699-809c-8889abadfdb8"
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "PeopleKnocked"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$.PeopleKnocked",
                                                    "$.Goal"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "live", "easy"]
            },
            {
                "Id": "dadd5460-cfe9-46a5-af92-7635651eb4d8",
                "Name": "CHALLENGEPACK_BORON_OVENMUFFIN_NAME",
                "ImageName": "images/challenges/Categories/PackBoron/Boron_OvenMuffin.jpg",
                "Description": "CHALLENGEPACK_BORON_OVERMUFFIN_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BORON",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredOutfit": "5d19c9f8-7df2-4113-b81d-b32d5e231717",
                        "Targets": [
                            "a5be536f-8cc1-444a-abe1-a3f0d7cf8ecd",
                            "a6aa8b8f-24d3-44b7-ba89-063c251d4881"
                        ],
                        "Goal": 2
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal"
                        }
                    },
                    "States": {
                        "Start": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "57d69808-1233-4aa6-9bda-c38fe0122c80"
                                    ]
                                },
                                "Transition": "Incinerator"
                            },
                            "BodyFound": {
                                "Condition": {
                                    "$any": {
                                        "?": {
                                            "$eq": [
                                                "$.#",
                                                "$Value.DeadBody.RepositoryId"
                                            ]
                                        },
                                        "in": "$.Targets"
                                    }
                                },
                                "Transition": "Failure"
                            }
                        },
                        "Incinerator": {
                            "$timer": {
                                "Condition": {
                                    "$after": 2
                                },
                                "Transition": "Start"
                            },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.Targets"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "5d19c9f8-7df2-4113-b81d-b32d5e231717"
                                                ]
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["boron-pack", "story", "live", "medium"]
            }
        ]
    },
    // Breaking and Entering (Whittleton Creek)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_MAGNESIUM",
        "Image": "images/challenges/categories/packmagnesium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "magnesium-pack",
        "Description": "",
        "OrderIndex": 4.994,
        "Challenges": [
            {
                "Id": "0c4a1700-489d-45e7-9c10-cc1064b12a01",
                "Name": "CHALLENGEPACK_MAGNESIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackMagnesium/Magnesium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_MAGNESIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_TOOL_BURGLARCROWBAR"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_MAGNESIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "200b8286-1104-4a1e-9df5-705fb218954e",
                            "e3408953-14f1-41e4-b845-dc0379743bbb",
                            "08b93dd3-0743-42a4-9491-74973ddeed51"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["magnesium-pack", "story", "hard"]
            },
            {
                "Id": "08b93dd3-0743-42a4-9491-74973ddeed51",
                "Name": "CHALLENGEPACK_MAGNESIUM_KEYS_NAME",
                "ImageName": "images/challenges/Categories/PackMagnesium/Magnesium_Keys.jpg",
                "Description": "CHALLENGEPACK_MAGNESIUM_KEYS_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_MAGNESIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "EligibleKeys": [
                            "ef155ff9-4abf-4b8e-b1f0-8b4989fa95da",
                            "1bf72d0f-cb85-453b-ab50-8a562b036145",
                            "1cb3588e-2c08-491e-9731-287f6bc335e4",
                            "51123583-df1f-44bb-8e9f-dbf094398008",
                            "88503ca5-299d-409a-a7cd-2f0d121f00d3",
                            "f0f9747b-d723-4b2f-b929-1741b347af89",
                            "1199dd3c-1f48-4d2c-97a9-7824ef0b9d93",
                            "64da56e6-f0ad-40ab-8c8e-5842a924b3f7",
                            "114b91c7-9229-4ba2-897b-e295355522f9",
                            "0183a8df-60e0-49a3-805e-b86cf6684bf4",
                            "1ad45788-f818-4765-b3f4-fda572d352f4",
                            "9278d474-0511-469a-9004-146d9b8b69fc"
                        ],
                        "RequiredKeys": 5
                    },
                    "Context": {
                        "StolenKeys": 0
                    },
                    "ContextListeners": {
                        "StolenKeys": {
                            "type": "challengecounter",
                            "count": "$.StolenKeys",
                            "total": "$.RequiredKeys"
                        }
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            },
                                            "in": "$.EligibleKeys"
                                        }
                                    },
                                    "Actions": {
                                        "$inc": "StolenKeys"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$.StolenKeys",
                                            "$.RequiredKeys"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ItemDropped": {
                                "Condition": {
                                    "$any": {
                                        "?": {
                                            "$eq": [
                                                "$.#",
                                                "$Value.RepositoryId"
                                            ]
                                        },
                                        "in": "$.EligibleKeys"
                                    }
                                },
                                "Actions": {
                                    "$dec": "StolenKeys"
                                }
                            }
                        }
                    }
                },
                "Tags": ["magnesium-pack", "story", "live", "medium"]
            },
            {
                "Id": "200b8286-1104-4a1e-9df5-705fb218954e",
                "Name": "CHALLENGEPACK_MAGNESIUM_POLICE_NAME",
                "ImageName": "images/challenges/Categories/PackMagnesium/Magnesium_Police.jpg",
                "Description": "CHALLENGEPACK_MAGNESIUM_POLICE_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_MAGNESIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "EligibleCops": [
                            "27f42632-7c82-45b3-adbd-070db4289de3",
                            "f8dc2a26-342e-471f-a683-f36b43485f23",
                            "f63d8f4a-103a-4364-a542-9c4cc53c0773",
                            "97e31849-2137-4138-94ef-f7e417b38dd5",
                            "182a97da-9f67-427f-a6df-148a5ac84564",
                            "e0632a9e-a9db-40d3-98b1-03b729f9b139",
                            "7cc5baa5-087d-473e-9bc9-ae7b3e354cf5",
                            "4694ae61-e3aa-4e00-988f-be878ad29490"
                        ],
                        "RequiredCops": 3
                    },
                    "Context": {
                        "PacifiedCops": []
                    },
                    "ContextListeners": {
                        "PacifiedCops": {
                            "type": "challengecounter",
                            "count": "($.PacifiedCops).Count",
                            "total": "$.RequiredCops"
                        }
                    },
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            },
                                            "in": "$.EligibleCops"
                                        }
                                    },
                                    "Actions": {
                                        "$pushunique": [
                                            "PacifiedCops",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.PacifiedCops).Count",
                                            "$.RequiredCops"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "BodyFound": {
                                "Actions": {
                                    "$remove": [
                                        "PacifiedCops",
                                        "$Value.DeadBody.RepositoryId"
                                    ]
                                }
                            }
                        }
                    }
                },
                "Tags": ["magnesium-pack", "story", "live", "medium"]
            },
            {
                "Id": "e3408953-14f1-41e4-b845-dc0379743bbb",
                "Name": "CHALLENGEPACK_MAGNESIUM_CROWBAR_NAME",
                "ImageName": "images/challenges/Categories/PackMagnesium/Magnesium_Crowbar.jpg",
                "Description": "CHALLENGEPACK_MAGNESIUM_CROWBAR_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_MAGNESIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHAMERICA",
                "ParentLocationId": "LOCATION_PARENT_NORTHAMERICA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "RequiredDoors": [
                            "Cassidy",
                            "Janus",
                            "Schmidt",
                            "West"
                        ]
                    },
                    "Context": {
                        "BrokenUpDoors": []
                    },
                    "ContextListeners": {
                        "BrokenUpDoors": {
                            "type": "challengecounter",
                            "count": "($.BrokenUpDoors).Count",
                            "total": "($.RequiredDoors).Count"
                        }
                    },
                    "States": {
                        "Start": {
                            "FrontDoorBrokenOpen": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": ["$.#", "$Value"]
                                            },
                                            "in": "$.RequiredDoors"
                                        }
                                    },
                                    "$pushunique": [
                                        "BrokenUpDoors",
                                        "$Value"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.BrokenUpDoors).Count",
                                            "($.RequiredDoors).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["magnesium-pack", "story", "live", "medium"]
            }
        ]
    },
    // Blake's Endeavor (Isle of Sgail)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
        "Image": "images/challenges/categories/packaluminium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "aluminium-pack",
        "Description": "",
        "OrderIndex": 4.995,
        "Challenges": [
            {
                "Id": "036856cb-63ca-4bb8-a0a4-0e22fe67e150",
                "Name": "CHALLENGEPACK_ALUMINIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["TOKEN_OUTFIT_GOLDEN_MASK"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "5296fe4d-09ba-4f9d-a6b6-bc7d28fddf84",
                            "91b324a7-e2f2-46da-bda0-beda1e60ac58",
                            "a5e66997-39e4-4b4c-bd0d-4dd47cdaa90a",
                            "d70a00ec-2495-493b-bf4f-69a89db8dc14",
                            "890c2ad2-de0a-4dbb-bc1c-2e66bbb7bc51"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "hard"]
            },
            {
                "Id": "5296fe4d-09ba-4f9d-a6b6-bc7d28fddf84",
                "Name": "CHALLENGEPACK_ALUMINIUM_ARK_CRATES_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_ArkCrates.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_ARK_CRATES_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 4
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_ALUMINIUM_ARK_CRATES_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_ArkItem_Stolen": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "live", "hard"]
            },
            {
                "Id": "890c2ad2-de0a-4dbb-bc1c-2e66bbb7bc51",
                "Name": "CHALLENGEPACK_ALUMINIUM_NECKLACE_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_Necklace.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_NECKLACE_DESC",
                "Rewards": {
                "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 3
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_ALUMINIUM_NECKLACE_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_NecklaceKillDiguised": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "live", "medium"]
            },
            {
                "Id": "91b324a7-e2f2-46da-bda0-beda1e60ac58",
                "Name": "CHALLENGEPACK_ALUMINIUM_GALLERY_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_Gallery.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_GALLERY_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 8
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "type": "challengecounter",
                            "count": "$.Count",
                            "total": "$.Goal",
                            "text": "CHALLENGEPACK_ALUMINIUM_GALLERY_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "C_GalleryItem_Stolen": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "live", "easy"]
            },
            {
                "Id": "a5e66997-39e4-4b4c-bd0d-4dd47cdaa90a",
                "Name": "CHALLENGEPACK_ALUMINIUM_CANNON_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_Cannon.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_CANNON_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_CannonFired"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "live", "easy"]
            },
            {
                "Id": "d70a00ec-2495-493b-bf4f-69a89db8dc14",
                "Name": "CHALLENGEPACK_ALUMINIUM_GUARDS_NAME",
                "ImageName": "images/challenges/Categories/PackAluminium/Aluminium_Guards.jpg",
                "Description": "CHALLENGEPACK_ALUMINIUM_GUARDS_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_ALUMINIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 10
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter",
                            "text": "CHALLENGEPACK_ALUMINIUM_GUARDS_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.ActorType",
                                                    1
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "d40fe7e8-ec8d-429b-a86b-7844c0e4d1c7"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemCategory",
                                                    "assaultrifle"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["aluminium-pack", "story", "live", "hard"]
            }
        ]
    },
    // The Butler Did It (Isle of Sgail)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
        "Image": "images/challenges/categories/packberylium/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "berylium-pack",
        "Description": "",
        "OrderIndex": 4.996,
        "Challenges": [
            {
                "Id": "671280f4-049c-44c8-aefe-cf7ecd90d239",
                "Name": "CHALLENGEPACK_BERYLIUM_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_Wrapper.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": ["PROP_MELEE_FEATHER_DUSTER"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "aa9186bb-b217-4b44-88ed-43a17330e829",
                            "fdd8f88f-be13-4e88-b579-01e15fd3315e",
                            "b3f168c3-91d3-4ea7-8f8b-a7047b05286f",
                            "02808209-d8d0-4568-a5de-bff0a0aecb1a",
                            "b9e8abd7-1a49-402a-9871-43dbbfed053e"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "comparand": "$.RequiredChallenges",
                            "type": "challengetree"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "hard"]
            },
            {
                "Id": "02808209-d8d0-4568-a5de-bff0a0aecb1a",
                "Name": "CHALLENGEPACK_BERYLIUM_LEADPIPE_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_LeadPipe.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_LEADPIPE_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 10
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter",
                            "text": "CHALLENGEPACK_BERYLIUM_LEADPIPE_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "e9a9b20d-93de-48b7-8840-73411bace252"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "7aeb740f-3d60-4e49-8d27-15a98067ce9f"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "live", "hard"]
            },
            {
                "Id": "aa9186bb-b217-4b44-88ed-43a17330e829",
                "Name": "CHALLENGEPACK_BERYLIUM_DAGGER_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_Dagger.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_DAGGER_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_Dagger_Butler"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "live", "easy"]
            },
            {
                "Id": "b3f168c3-91d3-4ea7-8f8b-a7047b05286f",
                "Name": "CHALLENGEPACK_BERYLIUM_CANNONBALL_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_Cannonball.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_CANNONBALL_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "Goal": 5
                    },
                    "Context": {
                        "Count": 0
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter",
                            "text": "CHALLENGEPACK_BERYLIUM_CANNONBALL_NAME"
                        }
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Pacify": [
                                {
                                    "Actions": {
                                        "$inc": "Count"
                                    },
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "e9a9b20d-93de-48b7-8840-73411bace252"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "b86b9ece-c929-44f6-8903-8f2c817e2a19"
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Count", "$.Goal"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "live", "hard"]
            },
            {
                "Id": "b9e8abd7-1a49-402a-9871-43dbbfed053e",
                "Name": "CHALLENGEPACK_BERYLIUM_POISON_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_Poison.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_POISON_DESC",
                "Rewards": {
                    "MasteryXP": 1000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "e9a9b20d-93de-48b7-8840-73411bace252"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "poison"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "live", "easy"]
            },
            {
                "Id": "fdd8f88f-be13-4e88-b579-01e15fd3315e",
                "Name": "CHALLENGEPACK_BERYLIUM_IRONMAIDEN_NAME",
                "ImageName": "images/challenges/Categories/PackBerylium/Berylium_IronMaiden.jpg",
                "Description": "CHALLENGEPACK_BERYLIUM_IRONMAIDEN_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_BERYLIUM",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "location",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Level_Setup_Events": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.Event_metricvalue",
                                        "C_IronMaidenButler"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["berylium-pack", "story", "live", "medium"]
            }
        ]
    },
    // The Best Case (Isle of Sgail)
    {
        "Name": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
        "Image": "images/challenges/categories/packphosphorus/tile.jpg",
        "Icon": "challenge_category_feats",
        "CategoryId": "phosphorus-pack",
        "Description": "",
        "OrderIndex": 4.997,
        "Challenges": [
            {
                "Id": "3a88685a-0986-44a9-9bac-b06a13c8e108",
                "Name": "CHALLENGEPACK_PHOSPHORUS_WRAPPER_NAME",
                "ImageName": "images/challenges/Categories/PackPhosphorus/Phosphorus_Wrapper.jpg",
                "Description": "CHALLENGEPACK_PHOSPHORUS_WRAPPER_DESC",
                "Rewards": {
                    "MasteryXP": 4000
                },
                "Drops": [ "PROP_CONTAINER_SUITCASE_SLOW_MK_II"],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "profile",
                    "Constants": {
                        "RequiredChallenges": [
                            "85c58770-17bf-4048-ac7d-08d356074d60",
                            "a9b839a1-1137-422f-a55b-6471118be887",
                            "883b4e2b-c649-4993-bda0-93bcd280c940",
                            "eabe3c6e-9470-49e4-8b3b-dac61d3fff34"
                        ]
                    },
                    "Context": {
                        "CompletedChallenges": []
                    },
                    "ContextListeners": {
                        "CompletedChallenges": {
                            "type": "challengetree",
                            "comparand": "$.RequiredChallenges"
                        }
                    },
                    "States": {
                        "Start": {
                            "ChallengeCompleted": [
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.ChallengeId"
                                                ]
                                            },
                                            "in": "$.RequiredChallenges"
                                        }
                                    },
                                    "$pushunique": [
                                        "CompletedChallenges",
                                        "$Value.ChallengeId"
                                    ]
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "($.CompletedChallenges).Count",
                                            "($.RequiredChallenges).Count"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["phosphorus-pack", "story", "hard"]
            },
            {
                "Id": "85c58770-17bf-4048-ac7d-08d356074d60",
                "Name": "CHALLENGEPACK_PHOSPHORUS_PIER_GUARDS_NAME",
                "ImageName": "images/challenges/Categories/PackPhosphorus/Phosphorus_PierGuards.jpg",
                "Description": "CHALLENGEPACK_PHOSPHORUS_PIER_GUARDS_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Constants": {
                        "Targets": [
                            "b1c27190-d14e-4962-81a5-9e9a670607f9",
                            "e0b6cb9a-92eb-4e49-a758-400e5f4a3e14",
                            "758bfd07-7df8-44f2-bb1f-3b7b54d84089",
                            "d0ca45fa-9795-41c0-9abf-bbbbb8b714e8",
                            "c96fddae-9b75-4d34-b89c-7aa3f8f7831b",
                            "3ef908f2-009d-4931-9642-8f5f68021f15"
                        ],
                        "Goal": 6
                    },
                    "Context": {
                        "Count": 0,
                        "PacifiedByCase": []
                    },
                    "ContextListeners": {
                        "Count": {
                            "count": "$.Count",
                            "total": "$.Goal",
                            "type": "challengecounter"
                        }
                    },
                    "States": {
                        "Start": {
                            "Spotted": {
                                "Transition": "Failure"
                            },
                            "Pacify": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.Targets"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillItemCategory",
                                                        "case"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$remove": [
                                            "PacifiedByCase",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.Targets"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemCategory",
                                                    "case"
                                                ]
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$pushunique": [
                                            "PacifiedByCase",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                }
                            ],
                            "BodyHidden": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$any": {
                                                        "?": {
                                                            "$eq": [
                                                                "$.#",
                                                                "$Value.RepositoryId"
                                                            ]
                                                        },
                                                        "in": "$.PacifiedByCase"
                                                    }
                                                }
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.RepositoryId"
                                                        ]
                                                    },
                                                    "in": "$.Targets"
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                },
                                {
                                    "Condition": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            },
                                            "in": "$.Targets"
                                        }
                                    },
                                    "Actions": {
                                        "$inc": "Count"
                                    }
                                },
                                {
                                    "Condition": {
                                        "$eq": ["$.Goal", "$.Count"]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                },
                "Tags": ["phosphorus-pack", "story", "medium"]
            },
            {
                "Id": "883b4e2b-c649-4993-bda0-93bcd280c940",
                "Name": "CHALLENGEPACK_PHOSPHORUS_BRIEFCASE SNIPER_NAME",
                "ImageName": "images/challenges/Categories/PackPhosphorus/Phosphorus_BriefcaseSniper.jpg",
                "Description": "CHALLENGEPACK_PHOSPHORUS_BRIEFCASE SNIPER_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "Context": {
                        "BriefcaseOnHelipad": false,
                        "HitmanOnHelipad": false
                    },
                    "States": {
                        "Start": {
                            "BriefcaseOnHelipad_Event": {
                                "Actions": {
                                    "$set": ["BriefcaseOnHelipad", true]
                                }
                            },
                            "HitmanOnHelipad_Event": {
                                "Actions": {
                                    "$set": ["HitmanOnHelipad", true]
                                }
                            },
                            "HitmanNotHelipad_Event": {
                                "Actions": {
                                    "$set": ["HitmanOnHelipad", false]
                                }
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                "$.HitmanOnHelipad",
                                                "$.BriefcaseOnHelipad",
                                                true
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillItemCategory",
                                                "sniperrifle"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["phosphorus-pack", "story", "medium"]
            },
            {
                "Id": "a9b839a1-1137-422f-a55b-6471118be887",
                "Name": "CHALLENGEPACK_PHOSPHORUS_MORGUE_TO_CRYPT_NAME",
                "ImageName": "images/challenges/Categories/PackPhosphorus/Phosphorus_MorgueToCrypt.jpg",
                "Description": "CHALLENGEPACK_PHOSPHORUS_MORGUE_TO_CRYPT_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Constants": {
                        "BurialRobe": "ae340f4d-6282-48d0-8e0d-c3dcb414bb4f"
                    },
                    "Context": {
                        "MorgueBriefcase": "00000000-0000-0000-0000-000000000000",
                        "InsideMorgue": false,
                        "HasMorgueBriefcase": true,
                        "DressedInBurialRobe": false
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Disguise": [
                                {
                                    "Condition": {
                                        "$eq": ["$Value", "$.BurialRobe"]
                                    },
                                    "Actions": {
                                        "$set": [
                                            "DressedInBurialRobe",
                                            true
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value",
                                                        "$.BurialRobe"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$.DressedInBurialRobe",
                                                    true
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Reset"
                                }
                            ],
                            "InsideMorgue_Event": {
                                "Actions": {
                                    "$set": ["InsideMorgue", true]
                                }
                            },
                            "OutsideMorgue_Event": {
                                "Actions": {
                                    "$set": ["InsideMorgue", false]
                                }
                            },
                            "InMorgueDressedInRobe_Event": {
                                "Actions": {
                                    "$set": ["DressedInBurialRobe", true]
                                }
                            },
                            "ItemPickedUp": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$.InsideMorgue",
                                                    true
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "case"
                                                        ]
                                                    },
                                                    "in": "$Value.OnlineTraits"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$set": [
                                            "MorgueBriefcase",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$.InsideMorgue",
                                                    true
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "case"
                                                        ]
                                                    },
                                                    "in": "$Value.OnlineTraits"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$set": ["HasMorgueBriefcase", true]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$.InsideMorgue",
                                                    false
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "case"
                                                        ]
                                                    },
                                                    "in": "$Value.OnlineTraits"
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "$.MorgueBriefcase"
                                                ]
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$set": ["HasMorgueBriefcase", true]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$.InsideMorgue",
                                                    false
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "case"
                                                        ]
                                                    },
                                                    "in": "$Value.OnlineTraits"
                                                }
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "$.MorgueBriefcase"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$set": [
                                            "HasMorgueBriefcase",
                                            false
                                        ]
                                    }
                                }
                            ],
                            "InCryptWithBriefcase_Event": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$not": {
                                                "$eq": [
                                                    "$.MorgueBriefcase",
                                                    "00000000-0000-0000-0000-000000000000"
                                                ]
                                            }
                                        },
                                        {
                                            "$eq": [
                                                "$.HasMorgueBriefcase",
                                                "$.DressedInBurialRobe",
                                                true
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        },
                        "Reset": {
                            "-": {
                                "Actions": {
                                    "$resetcontext": {}
                                },
                                "Transition": "Start"
                            }
                        }
                    }
                },
                "Tags": ["phosphorus-pack", "story", "medium"]
            },
            {
                "Id": "eabe3c6e-9470-49e4-8b3b-dac61d3fff34",
                "Name": "CHALLENGEPACK_PHOSPHORUS_BOMB_CASE_NAME",
                "ImageName": "images/challenges/Categories/PackPhosphorus/Phosphorus_BombCase.jpg",
                "Description": "CHALLENGEPACK_PHOSPHORUS_BOMB_CASE_DESC",
                "Rewards": {
                    "MasteryXP": 2000
                },
                "Drops": [],
                "IsPlayable": true,
                "IsLocked": false,
                "HideProgression": false,
                "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PACK_PHOSPHORUS",
                "Icon": "challenge_category_feats",
                "LocationId": "LOCATION_PARENT_NORTHSEA",
                "ParentLocationId": "LOCATION_PARENT_NORTHSEA",
                "Type": "parentlocation",
                "DifficultyLevels": [],
                "XpModifier": {},
                "RuntimeType": "Hit",
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "BombCaseActive_Event": {
                                "Transition": "ActiveState"
                            }
                        },
                        "ActiveState": {
                            "BombCaseInactive_Event": {
                                "Transition": "Start"
                            },
                            "Kill": {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "67f39ab8-c25f-48c3-84be-0ec495a553ec"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillMethodBroad",
                                                "explosive"
                                            ]
                                        }
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "Tags": ["phosphorus-pack", "story", "medium"]
            }
        ]
    },
]

module.exports = function LegacyChallengePacks(controller) {
    let EDGYSNIPER = {
        "Id": "2f812cf3-8ff2-4fbe-a74d-1f589cd86083",
        "Name": "UI_CHALLENGES_FOX_SNIPE_THE_SNIPER_NAME",
        "ImageName": "images/challenges/Edgy/Edgy_Snipe_the_Sniper.jpg",
        "Description": "UI_CHALLENGES_FOX_SNIPE_THE_SNIPER_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [
            "FIREARMS_HERO_SNIPER_HEAVY_009_SU_SUB_SCOUT_SKIN03"
        ],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_EDGY",
        "ParentLocationId": "LOCATION_PARENT_EDGY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {},
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "252428ca-3f8e-4477-b2b9-58f18cff3e44"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "sniperrifle"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.IsHeadshot",
                                        true
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "assassination"],
        "InclusionData": {
            "ContractIds": ["ebcd14b2-0786-4ceb-a2a4-e771f60d0125"]
        }
    }
    controller.challengeService.removeChallenge(EDGYSNIPER.Id, "h3")
    controller.challengeService.registerChallenge(
       EDGYSNIPER,
        "feats",
        EDGYSNIPER.ParentLocationId,
        "h3"
    )
    //Paris Mastery Overrides
    const parisexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_PARIS", "h3");
    parisexistingMasteryData.Drops = parisexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_SYRINGE_SEDATIVE");
    controller.masteryService.registerMasteryData(parisexistingMasteryData)
    //Sapienza Mastery Ovverides    
    const BKexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_BANGKOK", "h3");
    BKexistingMasteryData.Drops = BKexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_ANTIQUE_SYRINGE_LETHAL",);
    controller.masteryService.registerMasteryData(BKexistingMasteryData)
    const HKexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_HOKKAIDO", "h3");
    HKexistingMasteryData.Drops = HKexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_KATANA_ENGRAVED",);
    controller.masteryService.registerMasteryData(HKexistingMasteryData)
    const HbexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NEWZEALAND", "h3");
    HbexistingMasteryData.Drops =  HbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_TANTO",);
    controller.masteryService.registerMasteryData(HbexistingMasteryData)
    const mibexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_MIAMI", "h3");
    mibexistingMasteryData.Drops =  mibexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_FISHING_LINE",);
    controller.masteryService.registerMasteryData(mibexistingMasteryData)
    const sfbexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_COLOMBIA",  "h3");
    sfbexistingMasteryData.Drops =  sfbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_EXPLOSIVE_SHAMAN_POWDER",);
    sfbexistingMasteryData.Drops =  sfbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_VIOLIN_SMALL",);
    controller.masteryService.registerMasteryData(sfbexistingMasteryData)
    const MBbexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_MUMBAI",  "h3");
    MBbexistingMasteryData.Drops =  MBbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_ANTIQUE_KNIFE_CURVED",);
    controller.masteryService.registerMasteryData(MBbexistingMasteryData)
    const WCbexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA",  "h3");
    WCbexistingMasteryData.Drops =  WCbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_MELEE_MUFFIN_BLUEBERRY",);
    WCbexistingMasteryData.Drops =  WCbexistingMasteryData.Drops.filter(drop => drop.Id !== "PROP_TOOL_BURGLARCROWBAR",);
    controller.masteryService.registerMasteryData(WCbexistingMasteryData)
    const SGbexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHSEA",  "h3");
    SGbexistingMasteryData.Drops =  SGbexistingMasteryData.Drops.filter(drop => drop.Id !==  "PROP_MELEE_FEATHER_DUSTER",);
    SGbexistingMasteryData.Drops =  SGbexistingMasteryData.Drops.filter(drop => drop.Id !==  "PROP_CONTAINER_SUITCASE_SLOW_MK_II",);
    controller.masteryService.registerMasteryData(SGbexistingMasteryData)
//challenge packs
//challenge packs
    for (const group of groups) {
        const parentLocationId = group.Challenges[0].ParentLocationId;
        controller.challengeService.registerGroup(group, parentLocationId, "h3")

        for (const challenge of group.Challenges) {
            controller.challengeService.removeChallenge(challenge.Id, "h3")

            controller.challengeService.registerChallenge(
                challenge,
                group.CategoryId,
                challenge.ParentLocationId,
                "h3"
            )
        }
        controller.challengeService.challengePacks.set(group.CategoryId, {
            Name: group.Name,
            Description: group.Description,
            GameVersions: ["h3"],
            Image: group.Image,
            Icon: "challenge_category_feats"
          });
    }
    fammerlyaffair = {
        "Id": "4c51d754-e921-46da-ac26-c4862ae5d575",
        "Name": "UI_CHALLENGES_ANCESTRAL_FHAMMERLY_AFFAIR_NAME",
        "ImageName": "images/challenges/Ancestral/Ancestral_Fhammerly_Affair.jpg",
        "Description": "UI_CHALLENGES_ANCESTRAL_FHAMMERLY_AFFAIR_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_ANCESTRAL_BULLDOG",
        "ParentLocationId": "LOCATION_PARENT_ANCESTRAL",
        "Type": "location",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "Goal": 5
            },
            "Context": {
                "Count": 0,
                "Targets": [
                    "3ee70c86-8407-44bd-9927-3002d265a3a2",
                    "02bdd2c2-4311-4d62-a699-fa4ee07fc55f",
                    "445ef39d-ba5c-4e62-a9ca-02a2f5ade4ce",
                    "bce38660-1554-425b-8a00-749b70b61015",
                    "0fee1154-c66b-41e1-b504-897374cfdaff"
                ]
            },
            "ContextListeners": {
                "Count": {
                    "count": "$.Count",
                    "total": "$.Goal",
                    "type": "challengecounter"
                }
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "Pacify": [
                        {
                            "Actions": {
                                "$inc": "Count",
                                "$remove": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            },
                            "Condition": {
                                "$and": [
                                    {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "$or": [
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "3c24c96a-557c-472a-9d71-1a235d7383a7"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillItemRepositoryId",
                                                    "c4747fa2-4958-4a02-926e-3b069cf218dc"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$.Count", "$.Goal"]
                            },
                            "Transition": "Success"
                        },
                        {
                            "Transition": "Start"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "medium", "feats"]
    }
    stonesniper1 = {
        "Id": "920561a4-f544-4377-b0b0-b19e732be8b6",
        "Name": "STONE_COLD",
        "ImageName": "images/ui/sc/firearms_sc_hero_sniper_stone_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_MELEE_STONE_SNIPER_AUSTRIA"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_AUSTRIA",
        "ParentLocationId": "LOCATION_PARENT_AUSTRIA",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "assassination"],
        "InclusionData": {
            "ContractIds": ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"]
        }
    },
    knightsniper1 = {
        "Id": "420a2e91-b9e6-474d-b637-30922eb7527e",
        "Name": "KNIGHT_KNIGHT",
        "ImageName": "images/ui/sc/firearms_sc_hero_sniper_knight_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_MELEE_KNIGHT_SNIPER_AUSTRIA"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_AUSTRIA",
        "ParentLocationId": "LOCATION_PARENT_AUSTRIA",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "assassination"],
        "InclusionData": {
            "ContractIds": ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"]
        }
    }
    fourtysevensniper1 = {
        "Id": "d1d5e04d-5605-4556-a814-5d8313613a2a",
        "Name": "47_SNIPER",
        "ImageName": "images/ui/sc/firearms_sc_seagull_hm_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_47_SNIPER_HANTU"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_SALTY",
        "ParentLocationId": "LOCATION_PARENT_SALTY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "feats"],
        "InclusionData": {
            "ContractIds": ["00e57709-e049-44c9-a2c3-7655e19884fb"]
        }
    },
    stonesniper2 = {
        "Id": "072caef2-41af-4502-988d-65836f3469ba",
        "Name": "STONE_COLD",
        "ImageName": "images/ui/sc/firearms_sc_seagull_stone_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_STONE_SNIPER_HANTU"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_SALTY",
        "ParentLocationId": "LOCATION_PARENT_SALTY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "feats"],
        "InclusionData": {
            "ContractIds": ["00e57709-e049-44c9-a2c3-7655e19884fb"]
        }
    },
    knightsniper2 = {
        "Id": "9f33fa97-4591-47ec-9234-b318fffcadc6",
        "Name": "KNIGHT_KNIGHT",
        "ImageName": "images/ui/sc/firearms_sc_seagull_knight_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_KNIGHT_SNIPER_HANTU"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_SALTY",
        "ParentLocationId": "LOCATION_PARENT_SALTY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "feats"],
        "InclusionData": {
            "ContractIds": ["00e57709-e049-44c9-a2c3-7655e19884fb"]
        }
    },
    stonesniper3 = {
        "Id": "072caef2-41af-4502-988d-65836f3469ba",
        "Name": "STONE_COLD",
        "ImageName": "images/ui/sc/firearms_sc_seagull_stone_inparts.jpg",
        "Description": "SNIPER_GENERIC_DESC",
        "Rewards": {
            "MasteryXP": 0
        },
        "Drops": ["PROP_STONE_SNIPER_HANTU"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": true,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
        "Icon": "challenge_category_feats",
        "LocationId": "LOCATION_PARENT_SALTY",
        "ParentLocationId": "LOCATION_PARENT_SALTY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "feats"],
        "InclusionData": {
            "ContractIds": ["00e57709-e049-44c9-a2c3-7655e19884fb"]
        }
    },
//remove and re add needed challenges
controller.challengeService.removeChallenge("276bbad6-cd22-43f7-8ebb-7f6595d8b7f1", "h3")
    controller.challengeService.removeChallenge("4c51d754-e921-46da-ac26-c4862ae5d575", "h3")
    controller.challengeService.removeChallenge( "76a88800-05a6-469f-a536-27f795f9304e", "h3")
    controller.challengeService.removeChallenge("1afd7b98-5745-470a-be55-fe703fa7b082", "h3")
    controller.challengeService.removeChallenge( "29557099-98dd-4d07-a53a-1db147191f52", "h3")
    controller.challengeService.removeChallenge( "96506bc7-b6b8-4fab-9d8a-78502b807c2b", "h3")
    controller.challengeService.removeChallenge("2e6fbd64-3952-455b-a483-e261788dd501", "h3")
    controller.challengeService.removeChallenge( "8a3409e1-cfc4-4d61-9b99-101f8de47ebc", "h3")
    controller.challengeService.removeChallenge("7c4e7906-ad19-46c0-96f4-4fc301a562b4", "h3")//["PROP_MELEE_HOBBY_KNIFE"],
    controller.challengeService.removeChallenge(  "873662ef-9692-4efc-a7fa-e8d1da650467", "h3")
    controller.challengeService.removeChallenge(  "e60bf7f0-1cc7-4e01-a0e9-3879f8c0ee92", "h3")
    controller.challengeService.removeChallenge("1b1ab053-d55a-428d-b0cb-6bc2624c84b5", "h3")//  ["PROP_TOOL_SCREWDRIVER_PROFESSIONAL"],
    controller.challengeService.registerChallenge(fammerlyaffair,"discovery","LOCATION_PARENT_ANCESTRAL","h3")
  //  controller.challengeService.registerChallenge(stonesniper1,"feats","LOCATION_PARENT_AUSTRIA","h3")
    //controller.challengeService.registerChallenge(knightsniper1,"feats","LOCATION_PARENT_AUSTRIA","h3")
    //controller.challengeService.registerChallenge(fourtysevensniper1,"feats","LOCATION_PARENT_SALTY","h3")
    //controller.challengeService.registerChallenge(stonesniper2,"feats","LOCATION_PARENT_SALTY","h3")
    //controller.challengeService.registerChallenge(knightsniper2,"feats","LOCATION_PARENT_SALTY","h3")
    //controller.challengeService.registerChallenge(stonesniper3,"feats","LOCATION_PARENT_SALTY","h3")
    controller.masteryService.rebuildDropIndexes("h3")
    log(LogLevel.INFO, "[Peacock Plus] Legacy Challenge Packs restored.")
}
