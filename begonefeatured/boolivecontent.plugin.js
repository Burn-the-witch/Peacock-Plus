const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
module.exports = function test(controller) {
	if (Math.abs(PEACOCKVER) < 7350) {
		log(LogLevel.ERROR, `This plugin requires Peacock version v7.3.5 or higher! You're on v${PEACOCKVERSTRING}!`)
		return
	}
	controller.challengeService.removeChallenge("3d6eb80b-16af-4504-b23a-3465578b2cf9", "h3")
	controller.challengeService.removeChallenge("d4e7f657-dfe7-4ea4-9ab6-923e209eac7b", "h3")
	controller.challengeService.removeChallenge("31e8e58f-86c1-4f1b-9341-d312cd9f28f8", "h3")
	controller.challengeService.removeChallenge("81c27c20-5460-446d-a271-759d88b26025", "h3")
	controller.challengeService.removeChallenge("e60bf7f0-1cc7-4e01-a0e9-3879f8c0ee92", "h3")
	controller.challengeService.removeChallenge("2f58dac5-8170-4e85-a1b8-1c1cdca9cbd3", "h3")
	controller.challengeService.removeChallenge("5e3e631e-7495-4c3a-8b01-06229c7fdd0e", "h3")
	controller.challengeService.removeChallenge("8cdbbf2c-9b97-40a7-a83a-34edecb19652", "h3")
	controller.challengeService.removeChallenge("df5043a1-3077-4c00-a914-61715ec733ba", "h3")
	controller.challengeService.removeChallenge("071152b8-f2e3-4cb5-9c04-c87502c0dcfa", "h3")
	controller.challengeService.removeChallenge("5232e2b7-f5a2-49cc-b85b-666baf4488e2", "h3")
	controller.challengeService.removeChallenge("52659e5d-4b35-4807-b9a7-afd10417e1f3", "h3") //
	controller.challengeService.removeChallenge("c14f9d29-a3c8-4a7a-975c-1129060bb111", "h3") //
	controller.challengeService.removeChallenge("7f37d868-322e-4aba-a50e-312e6fa72fc6", "h3")
	controller.challengeService.removeChallenge("73e4a635-e144-4ba9-b291-d57ff0667e86", "h3")
	controller.challengeService.removeChallenge("c573a9aa-73cf-4efb-acc6-f391239cbeb5", "h3") //
	controller.challengeService.removeChallenge("e9ebc8aa-26c3-484b-b866-f39e722a39c8", "h3")
	controller.challengeService.removeChallenge("fcda14d4-6aba-4f6f-a7ea-fb4c4bcbcc68", "h3") //
	controller.challengeService.removeChallenge("82c28f6f-d986-4779-81ab-b46feed6b87b", "h3")
	controller.challengeService.removeChallenge("51fcf1a2-8270-44ef-bbaa-683273a4c0ae", "h3") //
	controller.challengeService.removeChallenge("3a1f35c0-7eed-48e9-87a0-d3d5504c3f9b", "h3") //
	controller.challengeService.removeChallenge("a513903d-d4d5-40ac-84a2-54464ac42c2e", "h3") //
	controller.challengeService.removeChallenge("553567aa-12b9-4915-b46e-4494002ed7e5", "h3")
	controller.challengeService.removeChallenge("447af250-6af3-4ca0-a3d6-d651d9235902", "h3")
	controller.challengeService.removeChallenge("f0e6b64c-7b89-4ec5-ae17-07548d92e9bd", "h3")
	controller.challengeService.removeChallenge("cbfb5e85-b93a-4030-be5f-4ec28c14335e", "h3")
	controller.challengeService.removeChallenge("85162cf4-0929-4541-9247-08a8c8a717b1", "h3")
	controller.challengeService.removeChallenge("1cb6662f-b471-427d-af62-14906ea8f2ed", "h3")
	controller.challengeService.removeChallenge("cddd65dc-1017-49d6-91de-e34cb219fa81", "h3")
	controller.challengeService.removeChallenge("817faf2a-fee7-4166-9332-39ef30a7f1d0", "h3")
	controller.challengeService.removeChallenge("afdb9b3f-5d19-41dd-a406-51b560f2cde2", "h3")
	controller.challengeService.removeChallenge("9b805891-5899-48be-baf9-75b91dda77fa", "h3")
	controller.challengeService.removeChallenge("ce8b2dbb-3730-468e-90c2-faba14c5ed6a", "h3")
	controller.challengeService.removeChallenge("7b6082fa-76f4-456c-a4a2-c8b84f9d63db", "h3")
	controller.challengeService.removeChallenge("48c13797-d937-4808-8625-720b94ce9e66", "h3")
	let tuppenceawishchallenge = {
		Id: "d37135e1-757a-46a8-9167-fe913adbc9ff",
		Name: "UI_CHALLENGES_BANGKOK_EXP_THROW_COIN_NAME",
		ImageName: "images/challenges/bangkok/bangkok_exp_throw_coin.jpg",
		Description: "UI_CHALLENGES_BANGKOK_EXP_THROW_COIN_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["PROP_TOOL_GOLD_COIN"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_BANGKOK",
		ParentLocationId: "LOCATION_PARENT_BANGKOK",
		Type: "location",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Constants: {
				Goal: 13
			},
			Context: {
				Count: 0
			},
			Scope: "session",
			States: {
				Start: {
					Level_Setup_Events: [
						{
							Actions: {
								$inc: "Count"
							},
							Condition: {
								$eq: ["$Value.Event_metricvalue", "Coin_In_Fountain"]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "hard", "feats"]
	}
	let shahchallenge = {
		Id: "ac596598-4713-4f87-8ecc-191da0c91eea",
		Name: "UI_CHALLENGES_MONGOOSE_TAILOR_KILL_NAME",
		ImageName: "images/challenges/Mumbai/Tailor_Kill_Mongoose.jpg",
		Description: "UI_CHALLENGES_MONGOOSE_TAILOR_KILL_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["PROP_MELEE_MEASURING_TAPE"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Icon: "challenge_category_assassination",
		LocationId: "LOCATION_PARENT_MUMBAI",
		ParentLocationId: "LOCATION_PARENT_MUMBAI",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					Kill: {
						Condition: {
							$and: [
								{
									$eq: ["$Value.RepositoryId", "076f23cc-09d8-423f-b890-74020f53b1d6"]
								},
								{
									$eq: ["$Value.OutfitRepositoryId", "b384ff35-9c38-4b08-ab0b-e333cfd7bc6a"]
								},
								{
									$eq: ["$Value.KillItemRepositoryId", "a804e004-7d45-42c8-87bd-b7cbcffa56cc"]
								}
							]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "assassination", "hard"],
		InclusionData: {
			ContractIds: ["0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7"]
		}
	}
	let sebastianchallenge = {
		Id: "fa6513f3-c2e6-4452-9372-f332a7b35181",
		Name: "UI_CONTRACT_ANGELICA_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Golden_Angelica.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["TOKEN_OUTFIT_GHOSTMODE_PHANTOM_REWARD_SUIT"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_GOLDEN",
		ParentLocationId: "LOCATION_PARENT_GOLDEN",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$ContractId", "d3ad9529-a962-4322-ab34-d890c2ce51c9"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["8885eeda-ad64-44fa-a944-1438b36c670c"]
		}
	}
	let delgadolarcenychallenge = {
		Id: "d356f0ef-0a7a-4de9-b9a4-6809d9b56d0a",
		Name: "UI_CONTRACT_RAFFLESIA_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Colombia_Rafflesia_SA.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_SA_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["FIREARMS_HERO_PISTOL_EL_MATADOR"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_COLOMBIA",
		ParentLocationId: "LOCATION_PARENT_COLOMBIA",
		Type: "contract",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				Witnesses: [],
				Targets: [],
				RecordingDestroyed: true,
				LastAccidentTime: 0
			},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$and: [
								{
									$eq: ["$ContractId", "19623520-8a89-4cc5-93f1-a4356fda16b2"]
								},
								{
									$eq: [true, "$.RecordingDestroyed"]
								},
								{
									$all: {
										in: "$.Witnesses",
										"?": {
											$any: {
												in: "$.Targets",
												"?": {
													$eq: ["$.#", "$.##"]
												}
											}
										}
									}
								}
							]
						},
						Transition: "Success"
					},
					AccidentBodyFound: {
						$set: ["LastAccidentTime", "$Timestamp"]
					},
					Witnesses: {
						Condition: {
							$any: {
								in: "$Value",
								"?": {
									$pushunique: ["Witnesses", "$.#"]
								}
							}
						}
					},
					Spotted: {
						Condition: {
							$any: {
								in: "$Value",
								"?": {
									$pushunique: ["Witnesses", "$.#"]
								}
							}
						}
					},
					Kill: [
						{
							Condition: {
								$and: [
									{
										$eq: ["$Value.IsTarget", false]
									},
									{
										$not: {
											$eq: ["$Value.KillContext", 1]
										}
									}
								]
							},
							Transition: "Failure"
						},
						{
							Condition: {
								$and: [
									{
										$eq: ["$Value.IsTarget", false]
									},
									{
										$eq: ["$Value.KillContext", 1]
									}
								]
							},
							Actions: {
								$pushunique: ["Targets", "$Value.RepositoryId"]
							}
						},
						{
							Condition: {
								$eq: ["$Value.IsTarget", true]
							},
							Actions: {
								$pushunique: ["Targets", "$Value.RepositoryId"]
							}
						}
					],
					CrowdNPC_Died: {
						Transition: "Failure"
					},
					MurderedBodySeen: [
						{
							Condition: {
								$eq: ["$Value.IsWitnessTarget", true]
							},
							Actions: {
								$pushunique: ["Witnesses", "$Value.Witness"]
							}
						},
						{
							Condition: {
								$and: [
									{
										$eq: ["$Value.IsWitnessTarget", false]
									},
									{
										$not: {
											$eq: ["$.LastAccidentTime", "$Timestamp"]
										}
									}
								]
							},
							Transition: "Failure"
						}
					],
					SecuritySystemRecorder: [
						{
							Actions: {
								$set: ["RecordingDestroyed", false]
							},
							Condition: {
								$eq: ["$Value.event", "spotted"]
							}
						},
						{
							Actions: {
								$set: ["RecordingDestroyed", true]
							},
							Condition: {
								$or: [
									{
										$eq: ["$Value.event", "erased"]
									},
									{
										$eq: ["$Value.event", "destroyed"]
									}
								]
							}
						}
					]
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["757fd132-0300-45ec-b5bd-bdd48c543b5c"]
		}
	}
	let gasgrenadechallenge = {
		Id: "1b3e21c7-1e56-47d1-9e7a-091f91f7d823",
		Name: "UI_CONTRACT_TITANUMARUM_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Colombia_Titanumarum.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["PROP_GAS_GRENADE_EMETIC"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_COLOMBIA",
		ParentLocationId: "LOCATION_PARENT_COLOMBIA",
		Type: "contract",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$ContractId", "79d966d9-5756-4a2f-b7e7-468a1a1ac351"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["be567ad3-23f4-4d0b-9d2e-b261ea845ef0"]
		}
	}
	let hotsummerchallenge = {
		Id: "0dce1e59-9b32-46b0-9a18-5469bb681170",
		Name: "UI_CONTRACT_ZINNIA_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Colombia_Zinnia.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["TOKEN_OUTFIT_HOT_SUMMER_SUIT"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_COLOMBIA",
		ParentLocationId: "LOCATION_PARENT_COLOMBIA",
		Type: "contract",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$ContractId", "f0d8a930-3581-41c8-b985-31eaeef9b920"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["a5e81878-0eae-4bcf-af9b-9a7e7833f85d"]
		}
	}
	let boscochallenge = {
		Id: "00000006-0000-0000-0000-000000000108",
		Name: "UI_CHALLENGES_COPPERHEAD_BOSCO_DIRECTOR_NAME",
		ImageName: "images/challenges/sapienza/copperhead_bosco_director.jpg",
		Description: "UI_CHALLENGES_COPPERHEAD_BOSCO_DIRECTOR_DESC",
		Rewards: {
			MasteryXP: 2000
		},
		Drops: ["PROP_DEVICE_ACTIONFIGURE_PROXIMITY_EXPLOSIVE"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
		Icon: "challenge_category_targets",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					Kill: {
						Condition: {
							$eq: ["$Value.RepositoryId", "9c81b545-a234-46c5-9296-54f9f2a0bb6d"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "medium", "targets"],
		InclusionData: {
			ContractIds: ["00000000-0000-0000-0001-000000000006"]
		}
	}
	let politicianchallenge = {
		Id: "316805dc-395e-453d-8cad-fbd64705d69c",
		Name: "UI_CHALLENGES_MAMBA_ABIATTI_POLITITION_NAME",
		ImageName: "images/challenges/sapienza/mamba_abiatti_politition.jpg",
		Description: "UI_CHALLENGES_MAMBA_ABIATTI_POLITITION_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["PROP_DISTRACTION_FIRECRACKER"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
		Icon: "challenge_category_targets",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					Kill: {
						Condition: {
							$eq: ["$Value.RepositoryId", "853b4070-99b1-45da-938b-6fa7947eb7cd"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "hard", "targets"],
		InclusionData: {
			ContractIds: ["00000000-0000-0000-0001-000000000005"]
		}
	}
	let cashmerianchallenge = {
		Id: "a138731b-6b5d-4eb9-b47b-adc9281b39d0",
		Name: "UI_CONTRACT_PROTEA_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Mumbai_Protea.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["TOKEN_OUTFIT_SNAKE_CHARMER_SUIT"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_MUMBAI",
		ParentLocationId: "LOCATION_PARENT_MUMBAI",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$ContractId", "cb7d1f3e-996f-4955-9b87-bdc40e4160ee"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["a10472e4-0eb3-451d-814d-38837dd0f407"]
		}
	}
	let casechallenge = {
		Id: "1a93f31d-8c1f-4f13-aa63-b6019962f28d",
		Name: "UI_CONTRACT_JACARANDA_GROUP_TITLE",
		ImageName: "images/contracts/escalation/ContractEscalation_Elegant_Jacaranda.jpg",
		Description: "UI_CHALLENGES_ESCLATION_COMPLETE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["PROP_CONTAINER_SUITCASE_SIEGER300"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_ELEGANT",
		ParentLocationId: "LOCATION_PARENT_ELEGANT",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$ContractId", "b6d195ed-218f-4027-b789-4db9d5553a17"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["feats", "hard"],
		InclusionData: {
			ContractIds: ["14a21819-f81f-453d-8734-a3aab528fa62"]
		}
	}

	let axechallenge = {
		Id: "c6ccde23-d7b6-4f9a-aaa6-9f13f58fc85e",
		Name: "CHALLENGEPACK_SILICON_SNOWBALLGUARDS_NAME",
		ImageName: "images/challenges/Categories/PackSilicon/Silicon_SnowballGuards.jpg",
		Description: "CHALLENGEPACK_SILICON_SNOWBALLGUARDS_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: ["PROP_MELEE_ICE_AXE"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_HOKKAIDO",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			Constants: {
				RequiredTargets: [
					"312718e7-7b0c-41c6-bda0-e06e0233cf85",
					"85e084f7-97c8-4629-b299-f415e9c816e0",
					"f7bb9a06-bbaa-464b-97b3-e3a2eb85711d"
				]
			},
			Context: {
				PacifiedTargets: []
			},
			ContextListeners: {
				PacifiedTargets: {
					type: "challengecounter",
					count: "($.PacifiedTargets).Count",
					total: "($.RequiredTargets).Count"
				}
			},
			States: {
				Start: {
					Pacify: [
						{
							Condition: {
								$and: [
									{
										$eq: ["$Value.KillItemRepositoryId", "a6706101-3aaf-4797-a0f8-a5b6aac9cdfe"]
									},
									{
										$any: {
											"?": {
												$eq: ["$.#", "$Value.RepositoryId"]
											},
											in: "$.RequiredTargets"
										}
									}
								]
							},
							Actions: {
								$pushunique: ["PacifiedTargets", "$Value.RepositoryId"]
							}
						},
						{
							Condition: {
								$eq: ["($.PacifiedTargets).Count", "($.RequiredTargets).Count"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["feats", "story", "live", "easy"],
		InclusionData: {
			ContractIds: ["c414a084-a7b9-43ce-b6ca-590620acd87e"]
		}
	}

	let phonechal = {
		Id: "ebc81746-d63b-410d-b4d6-00b68e238911",
		Name: "UI_CHALLENGES_MARRAKECH_EXP_PHONE_KILL_NAME",
		ImageName: "images/challenges/marrakech/marrakech_exp_phone_kill.jpg",
		Description: "UI_CHALLENGES_MARRAKECH_EXP_PHONE_KILL_DESC",
		Rewards: {
			MasteryXP: 2500
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_MARRAKECH",
		ParentLocationId: "LOCATION_PARENT_MARRAKECH",
		Type: "location",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				Completed: [],
				Count: 0,
				Goal: 5
			},
			Scope: "hit",
			States: {
				Start: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["Completed", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.Completed"
											}
										}
									},
									{
										$eq: ["$Value.SetPieceType", "9d730373-d18b-46d5-9250-32d07560c2ea"]
									},
									{
										$eq: ["$Value.IsTarget", true]
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "medium", "feats"]
	}
	let sparkymarakech = {
		Id: "d4c349d6-d6fe-47e1-a92e-48eda1cc209d",
		Name: "UI_CHALLENGES_MARRAKECH_EXP_ELECTRICUTE_TARGET_NAME",
		ImageName: "images/challenges/marrakech/marrakech_exp_electricute_target.jpg",
		Description: "UI_CHALLENGES_MARRAKECH_EXP_ELECTRICUTE_TARGET_DESC",
		Rewards: {
			MasteryXP: 2500
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_MARRAKECH",
		ParentLocationId: "LOCATION_PARENT_MARRAKECH",
		Type: "location",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				Completed: [],
				Count: 0,
				Goal: 5
			},
			Scope: "hit",
			States: {
				Start: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["Completed", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.Completed"
											}
										}
									},
									{
										$or: [
											{
												$eq: ["$Value.SetPieceType", "6b0eca75-603b-4bd1-b016-cbad05f2d4f6"]
											},
											{
												$eq: ["$Value.SetPieceType", "6260478d-0a5e-4d0b-bd06-9184bbf93289"]
											}
										]
									},
									{
										$eq: ["$Value.IsTarget", true]
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "medium", "feats"]
	}

	let putthelimeinthecoconut = {
		Id: "d93b93a5-e80d-450c-9c1c-757a12b9a515",
		Name: "UI_CHALLENGES_TIGER_SIGN_BOTH_COCONUT_NAME",
		ImageName: "images/challenges/bangkok/tiger_sign_both_coconut.jpg",
		Description: "UI_CHALLENGES_TIGER_SIGN_BOTH_COCONUT_DESC",
		Rewards: {
			MasteryXP: 5000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Icon: "challenge_category_assassination",
		LocationId: "LOCATION_BANGKOK",
		Type: "location",
		ParentLocationId: "LOCATION_PARENT_BANGKOK",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_MISSION",
		TypeTitle: "UI_CONTRACT_TIGER_TITLE",
		TypeIcon: "mission",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Is_DoubleKill: {
					Kill: {
						Condition: {
							$or: [
								{
									$and: [
										{
											$eq: ["$Value.RepositoryId", "f65fff84-6cad-4a11-9a0a-b89430c03397"]
										},
										{
											$eq: ["$Value.SetPieceType", "24704419-6f21-4c0b-a4ff-ecf26f247cfc"]
										}
									]
								},
								{
									$and: [
										{
											$eq: ["$Value.RepositoryId", "ee3f55b8-12f8-4245-8ef2-3022b4f6f120"]
										},
										{
											$eq: ["$Value.SetPieceType", "24704419-6f21-4c0b-a4ff-ecf26f247cfc"]
										}
									]
								}
							]
						},
						Transition: "Success"
					}
				},
				Start: {
					Kill: {
						Condition: {
							$or: [
								{
									$and: [
										{
											$eq: ["$Value.RepositoryId", "f65fff84-6cad-4a11-9a0a-b89430c03397"]
										},
										{
											$eq: ["$Value.SetPieceType", "24704419-6f21-4c0b-a4ff-ecf26f247cfc"]
										}
									]
								},
								{
									$and: [
										{
											$eq: ["$Value.RepositoryId", "ee3f55b8-12f8-4245-8ef2-3022b4f6f120"]
										},
										{
											$eq: ["$Value.SetPieceType", "24704419-6f21-4c0b-a4ff-ecf26f247cfc"]
										}
									]
								}
							]
						},
						Transition: "Is_DoubleKill"
					}
				}
			}
		},
		Tags: ["story", "hard", "assassination"],
		InclusionData: {
			ContractIds: ["db341d9f-58a4-411d-be57-0bc4ed85646b"]
		}
	}

	let actualtorture = {
		Id: "7d8aeb17-fb25-43c9-ac5e-b6a4ea8ff4e8",
		Name: "UI_CHALLENGES_ZIKA_SLAM_DUNK_NAME",
		ImageName: "images/challenges/bangkok/zika_slam_dunk.jpg",
		Description: "UI_CHALLENGES_ZIKA_SLAM_DUNK_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Icon: "challenge_category_assassination",
		Type: "location",
		LocationId: "LOCATION_BANGKOK_ZIKA",
		ParentLocationId: "LOCATION_PARENT_BANGKOK",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_CAMPAIGN",
		TypeTitle: "UI_CONTRACT_ZIKA_TITLE",
		TypeIcon: "mission",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					Level_Setup_Events: {
						Condition: {
							$eq: ["$Value.Event_metricvalue", "SlamDunk"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "assassination"]
	}
	let okaystephenking = {
		Id: "ae3c214f-8bae-44e5-aa5c-673837f1d0f4",
		Name: "UI_CHALLENGES_BANGKOK_EASTER_EGG_ELEPHANT_NAME",
		ImageName: "images/challenges/bangkok/bangkok_easter_egg_elephant.jpg",
		Description: "UI_CHALLENGES_BANGKOK_EASTER_EGG_ELEPHANT_DESC",
		Rewards: {
			MasteryXP: 5000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_BANGKOK",
		Type: "location",
		ParentLocationId: "LOCATION_PARENT_BANGKOK",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					Level_Setup_Events: {
						Condition: {
							$eq: ["$Value.Event_metricvalue", "Easter_Egg_Elephant"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "hard", "feats"]
	}
	let ghostrunnerprotagbelike = {
		Id: "826da864-9cb6-4d1e-9d64-a9ee8746e113",
		Name: "UI_CHALLENGES_COLORADO_EXP_CARJACK_KILL_NAME",
		ImageName: "images/challenges/colorado/colorado_exp_carjack_kill.jpg",
		Description: "UI_CHALLENGES_COLORADO_EXP_CARJACK_KILL_DESC",
		Rewards: {
			MasteryXP: 2500
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_COLORADO",
		Type: "location",
		ParentLocationId: "LOCATION_PARENT_COLORADO",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				Count: 0,
				TargetGoal: 5,
				TargetKilled: []
			},
			Scope: "session",
			States: {
				Start: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["TargetKilled", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.TargetKilled"
											}
										}
									},
									{
										$eq: ["$Value.IsTarget", true]
									},
									{
										$eq: ["$Value.SetPieceId", "ed4ef3fe-4cd2-414d-993a-8c98e47cfc7a"]
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.TargetGoal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "medium", "feats"]
	}
	let thatscrazybrobutdidIask = {
		Id: "f1e3a8c2-f3db-4857-a027-4d298a0db038",
		Name: "UI_CHALLENGES_HOKKAIDO_EXP_CRAZY_88_NAME",
		ImageName: "images/challenges/hokkaido/hokkaido_exp_crazy_88.jpg",
		Description: "UI_CHALLENGES_HOKKAIDO_EXP_CRAZY_88_DESC",
		Rewards: {
			MasteryXP: 5000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		Type: "location",
		LocationId: "LOCATION_HOKKAIDO",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				TargetsKilled: [],
				Count: 0,
				Goal: 8
			},
			Scope: "hit",
			States: {
				Start: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["TargetsKilled", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$any: {
											"?": {
												$eq: ["$.#", "$Value.RepositoryId"]
											},
											in: [
												"80643220-77ab-4427-8d79-4063fefd9870",
												"9925b896-c624-4e07-b803-e578628af0eb",
												"8e78f7a2-5def-4d32-aae6-001cb76a4d7f",
												"bcdb769b-b7a4-4342-98c8-7d8c5224930d",
												"f32692e1-226c-4a10-bdc0-9298d29655be",
												"3e1bb865-3209-46b8-b345-d5b8e0428084",
												"d3875016-9aae-4023-8f56-5fca535fad40",
												"e3f211bf-79c4-4fe0-a5a0-34ad5b5de7f7",
												"dfd88cf0-cd02-4994-9de6-661f9aa71d3e",
												"92ff92f8-aa5f-4ba3-b500-e807d0819783",
												"2b345524-181e-4d20-a9fc-be3ba83ac701",
												"fe8fcaa5-c221-4f8e-b208-0cf7f37633b9",
												"e6150e64-7178-42b2-9b67-7fcb9a14f1fb",
												"255d0b0b-ad13-4026-8cdd-73c72a911942",
												"b0d0c49e-815d-4601-8b14-daa3c9d2629b",
												"6d50c5e3-251f-4c65-8b1e-18a4bdc7c62d",
												"5020e98e-96db-48c5-971e-6f30dfe0b6d1",
												"aa2537e6-c071-447a-ace6-de84d56fcf1e",
												"4ebdd50b-d38e-46a9-82f9-de25fe8419bb",
												"83d15b15-9e2c-4824-adeb-4449ccbc4e54"
											]
										}
									},
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.TargetsKilled"
											}
										}
									},
									{
										$eq: ["$Value.IsTarget", true]
									},
									{
										$eq: ["$Value.OutfitRepositoryId", "8e01f48f-ef06-448c-9d22-5d58c4414968"]
									},
									{
										$any: {
											"?": {
												$eq: ["$.#", "$Value.KillItemRepositoryId"]
											},
											in: [
												"5631dace-7f4a-4df8-8e97-b47373b815ff",
												"d439fb64-8713-4c54-a3f3-90730dbdf370"
											]
										}
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "hard", "feats"]
	}
	let sureican = {
		Id: "b0e95396-35b0-437e-942d-704216a04798",
		Name: "UI_CHALLENGES_HOKKAIDO_EXP_NINJA_KILL_5_NAME",
		ImageName: "images/challenges/hokkaido/hokkaido_exp_ninja_kill_5.jpg",
		Description: "UI_CHALLENGES_HOKKAIDO_EXP_NINJA_KILL_5_DESC",
		Rewards: {
			MasteryXP: 5000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_HOKKAIDO",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				TargetsKilled: [],
				Count: 0,
				Goal: 5
			},
			Scope: "session",
			States: {
				Start: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["TargetsKilled", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.TargetsKilled"
											}
										}
									},
									{
										$eq: ["$Value.IsTarget", true]
									},
									{
										$eq: ["$Value.OutfitRepositoryId", "06456d4d-da36-4008-bea5-c0b985a565f5"]
									},
									{
										$eq: ["$Value.KillItemRepositoryId", "e55eb9a4-e79c-43c7-970b-79e94e7683b7"]
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					],
					Spotted: {
						Transition: "Failure"
					}
				}
			}
		},
		Tags: ["story", "hard", "feats"]
	}
	let lit = {
		Id: "d612f5db-8150-4791-ba28-82a20d78dc0a",
		Name: "UI_CHALLENGES_HOKKAIDO_EXP_INCINERATE_BODY_NAME",
		ImageName: "images/challenges/hokkaido/hokkaido_exp_incinerate_body.jpg",
		Description: "UI_CHALLENGES_HOKKAIDO_EXP_INCINERATE_BODY_DESC",
		Rewards: {
			MasteryXP: 2500
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_HOKKAIDO",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				Count: 0,
				Goal: 2,
				TargetKilled: []
			},
			Scope: "session",
			States: {
				Start: {
					setpieces: {
						Condition: {
							$and: [
								{
									$eq: ["$Value.name_metricvalue", "BodyFlushed"]
								},
								{
									$eq: ["$Value.RepositoryId", "93767116-a765-4e97-b51c-c45879457e71"]
								}
							]
						},
						Transition: "Check_Is_Target"
					}
				},
				Check_Is_Target: {
					Kill: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["TargetKilled", "$Value.RepositoryId"]
							},
							Condition: {
								$eq: ["$Value.IsTarget", true]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						},
						{
							Transition: "Start"
						}
					]
				}
			}
		},
		Tags: ["story", "medium", "feats"]
	}
	let homerun = {
		Id: "c648adfe-25a6-4b10-b5c8-9fe32cea53be",
		Name: "UI_CHALLENGES_HOKKAIDO_EXP_BASEBALL_KNOCKOUT_NAME",
		ImageName: "images/challenges/hokkaido/hokkaido_exp_baseball_knockout.jpg",
		Description: "UI_CHALLENGES_HOKKAIDO_EXP_BASEBALL_KNOCKOUT_DESC",
		Rewards: {
			MasteryXP: 2500
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_HOKKAIDO",
		Type: "location",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {
				GuardsPacified: [],
				Count: 0,
				Goal: 20
			},
			Scope: "session",
			States: {
				Start: {
					Pacify: [
						{
							Actions: {
								$inc: "Count",
								$pushunique: ["GuardsPacified", "$Value.RepositoryId"]
							},
							Condition: {
								$and: [
									{
										$any: {
											"?": {
												$eq: ["$.#", "$Value.RepositoryId"]
											},
											in: [
												"80643220-77ab-4427-8d79-4063fefd9870",
												"9925b896-c624-4e07-b803-e578628af0eb",
												"8e78f7a2-5def-4d32-aae6-001cb76a4d7f",
												"bcdb769b-b7a4-4342-98c8-7d8c5224930d",
												"f32692e1-226c-4a10-bdc0-9298d29655be",
												"3e1bb865-3209-46b8-b345-d5b8e0428084",
												"d3875016-9aae-4023-8f56-5fca535fad40",
												"e3f211bf-79c4-4fe0-a5a0-34ad5b5de7f7",
												"dfd88cf0-cd02-4994-9de6-661f9aa71d3e",
												"92ff92f8-aa5f-4ba3-b500-e807d0819783",
												"2b345524-181e-4d20-a9fc-be3ba83ac701",
												"fe8fcaa5-c221-4f8e-b208-0cf7f37633b9",
												"e6150e64-7178-42b2-9b67-7fcb9a14f1fb",
												"255d0b0b-ad13-4026-8cdd-73c72a911942",
												"b0d0c49e-815d-4601-8b14-daa3c9d2629b",
												"6d50c5e3-251f-4c65-8b1e-18a4bdc7c62d",
												"5020e98e-96db-48c5-971e-6f30dfe0b6d1",
												"aa2537e6-c071-447a-ace6-de84d56fcf1e",
												"4ebdd50b-d38e-46a9-82f9-de25fe8419bb",
												"83d15b15-9e2c-4824-adeb-4449ccbc4e54"
											]
										}
									},
									{
										$not: {
											$any: {
												"?": {
													$eq: ["$.#", "$Value.RepositoryId"]
												},
												in: "$.GuardsPacified"
											}
										}
									},
									{
										$any: {
											"?": {
												$eq: ["$.#", "$Value.KillItemRepositoryId"]
											},
											in: [
												"c7296c5f-6c0e-4d52-98cd-e70a0d329e73",
												"c21f558b-2935-41e5-88ff-642eb1761ccc"
											]
										}
									},
									{
										$eq: ["$Value.OutfitRepositoryId", "5946924c-958d-48f4-ada3-86beb58aa778"]
									}
								]
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "medium", "feats"]
	}

	let parisbasement = {
		Id: "4afa92e4-d23f-4ad0-864d-002444fa9aa3",
		Name: "UI_CHALLENGES_PEACOCK_EXIT_GATE_BASEMENT_NAME",
		ImageName: "images/challenges/paris/paris_c_exit_gate_basement.jpg",
		Description: "UI_CHALLENGES_PEACOCK_EXIT_GATE_BASEMENT_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "a09d755b-6df9-4878-a4c5-4718a6c1c6d9"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}

	let parischopper = {
		Id: "714fd074-9027-402e-a113-3ed07b8ea8a0",
		Name: "UI_CHALLENGES_PEACOCK_EXIT_GATE_HELICOPTER_NAME",
		ImageName: "images/challenges/paris/paris_c_exit_gate_helicopter.jpg",
		Description: "UI_CHALLENGES_PEACOCK_EXIT_GATE_HELICOPTER_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		Type: "location",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "d4aad1c4-13e7-42e7-9d57-bffb765a9f77"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}

	let parislockerspawn = {
		Id: "6dab11bb-4a05-4445-b47f-2f03ea762b8b",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_LOCKERROOM_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_lockeroom.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_LOCKERROOM_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "c6765d3e-4031-4778-a5c5-a6d875131ea4"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "c6765d3e-4031-4778-a5c5-a6d875131ea4"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parisauctionspawn = {
		Id: "9f00004d-f2ee-4303-8c89-357fd52011fe",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_AUCTION_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_auction.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_AUCTION_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: {
						Condition: {
							$eq: ["$Value.RepositoryId", "943b8f1f-10c4-4dbf-a67e-25ed343290f5"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parisdressingspawn = {
		Id: "e5b3a5f9-52ae-42e5-953f-4a8c6c0e41aa",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_DRESSING_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_dressing.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_DRESSING_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "04834714-406b-444e-b0d8-2f1054c1f8b5"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "04834714-406b-444e-b0d8-2f1054c1f8b5"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parisavspawn = {
		Id: "f7071807-2695-4986-9ce7-4dc6610a7fc1",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_AVBAY_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_avbay.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_AVBAY_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "be610298-cbe8-47ce-9e90-951d2aae6f39"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "be610298-cbe8-47ce-9e90-951d2aae6f39"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parisbargespawn = {
		Id: "e17dd65d-3fbe-406a-a1e8-5101f1fa2740",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_BARGE_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_barge.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_BARGE_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "67aec874-287f-4c82-9e01-3dbd7683faac"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "67aec874-287f-4c82-9e01-3dbd7683faac"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parispalacebargespawn = {
		Id: "be31eba5-f058-4910-acce-51479000036f",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_PALACEGARDEN_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_palacegarden.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_PALACEGARDEN_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "74062d4a-3386-44b8-83e0-1d0348e5976f"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "74062d4a-3386-44b8-83e0-1d0348e5976f"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let parisatticspawn = {
		Id: "eb020749-9e57-4323-8bf7-7aa130d329ed",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_ATTIC_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_attic.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_ATTIC_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		Type: "location",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "3bdb62b5-15ef-4eb6-94b1-7f2e0cdf1d31"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "3bdb62b5-15ef-4eb6-94b1-7f2e0cdf1d31"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let pariskitchenspawn = {
		Id: "f96abda2-0294-45d1-b0e2-e8936d921237",
		Name: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_KITCHEN_NAME",
		ImageName: "images/challenges/paris/paris_c_spawn_location_kitchen.jpg",
		Description: "UI_CHALLENGES_PEACOCK_SPAWN_LOCATION_KITCHEN_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_PARIS",
		ParentLocationId: "LOCATION_PARENT_PARIS",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_PARIS_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "aa4cdd0b-8fcf-4160-a049-c15a19c82af1"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "aa4cdd0b-8fcf-4160-a049-c15a19c82af1"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	let sapiboatexit1 = {
		Id: "d975e347-bbac-420d-820a-3e6249bf5fa0",
		Name: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_RUINBOAT_NAME",
		ImageName: "images/challenges/sapienza/sapienza_exit_gate_ruinboat.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_RUINBOAT_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "8308afa1-e0b3-4f05-8f76-c1016160941d"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiboatexit1, "discovery", sapiboatexit1.ParentLocationId, "h3")
	let sapiboatexit2 = {
		Id: "0ad6b4b7-1a9f-4efc-a884-b743c98ac66c",
		Name: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_HARBOURBOAT_NAME",
		ImageName: "images/challenges/sapienza/sapienza_exit_gate_harbourboat.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_HARBOURBOAT_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "f14172be-7d31-4414-84ee-4378ce930d00"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiboatexit2, "discovery", sapiboatexit2.ParentLocationId, "h3")
	let sapicarexit = {
		Id: "993a9f77-d338-4e4f-a75d-7dca0a330d89",
		Name: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_CAR_NAME",
		ImageName: "images/challenges/sapienza/sapienza_exit_gate_car.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_CAR_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "51335db0-be3e-4a30-9212-55d4e39b23a2"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapicarexit, "discovery", sapicarexit.ParentLocationId, "h3")
	let sapiseaplaneexit = {
		Id: "181b87c1-50a3-4fd4-98a9-92846b163213",
		Name: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_SEAPLANE_NAME",
		ImageName: "images/challenges/sapienza/sapienza_exit_gate_seaplane.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_EXIT_GATE_SEAPLANE_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "8d57c12a-ea3c-4272-8b99-13fcc4583710"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiseaplaneexit, "discovery", sapiseaplaneexit.ParentLocationId, "h3")
	let mambagateexit = {
		Id: "f95a7f89-fe32-4d1d-8305-a3fe58b5498b",
		Name: "UI_CHALLENGES_MAMBA_EXIT_GATE_NAME",
		ImageName: "images/challenges/sapienza/mamba_exit_gate.jpg",
		Description: "UI_CHALLENGES_MAMBA_EXIT_GATE_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN_NIGHT",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Scope: "session",
			States: {
				Start: {
					exit_gate: {
						Condition: {
							$eq: ["$Value.RepositoryId", "63317ff2-e1da-42f5-acba-da79dc18beb0"]
						},
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "discovery"]
	}
	controller.challengeService.registerChallenge(mambagateexit, "discovery", mambagateexit.ParentLocationId, "h3")
	let sapikitchenspawn = {
		Id: "fda14ee1-9a19-4812-8cf8-0a8516b85c62",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_MANSIONKITCHEN_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_mansionkitchen.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_MANSIONKITCHEN_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "1021798e-cec1-4b43-ba33-69b7d53da867"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "1021798e-cec1-4b43-ba33-69b7d53da867"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapikitchenspawn, "discovery", sapikitchenspawn.ParentLocationId, "h3")
	let sapiruinsspawn = {
		Id: "d8ed4622-2a62-48e9-baef-18a9432a5b3c",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_RUINS_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_ruins.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_RUINS_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "a72bd197-f996-4e3b-b494-11f62296a2b3"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "a72bd197-f996-4e3b-b494-11f62296a2b3"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiruinsspawn, "discovery", sapiruinsspawn.ParentLocationId, "h3")
	let sapiharbourspawn = {
		Id: "bdc3f015-f2e7-48d1-9781-3760a4617003",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_HARBOUR_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_harbour.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_HARBOUR_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		Type: "location",
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "c27f76ca-ed71-4b2d-9b9d-693875df830c"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "c27f76ca-ed71-4b2d-9b9d-693875df830c"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiharbourspawn, "discovery", sapiharbourspawn.ParentLocationId, "h3")
	let sapiICAspawn = {
		Id: "a3098e14-8498-4009-aadc-4ab8a09066da",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_APARTMENT_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_apartment.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_APARTMENT_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		Type: "location",
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "c113315d-ffcc-4878-9e70-bb35aadf0211"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "c113315d-ffcc-4878-9e70-bb35aadf0211"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapiICAspawn, "discovery", sapiICAspawn.ParentLocationId, "h3")
	let sapielemongardenspawn = {
		Id: "70874b22-84bf-444a-8a78-4d409c8287e7",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_LEMONGARDEN_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_lemongarden.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_LEMONGARDEN_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "8fd339e1-ea06-4aee-bd65-0c89b34e4e7e"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "8fd339e1-ea06-4aee-bd65-0c89b34e4e7e"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(
		sapielemongardenspawn,
		"discovery",
		sapielemongardenspawn.ParentLocationId,
		"h3"
	)
	let sapimansiongardenspawn = {
		Id: "68432423-4f8d-4303-b3e7-5807fa5dfa7c",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_MANSIONGARDEN_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_mansiongarden.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_MANSIONGARDEN_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		Type: "location",
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "249659f3-8989-4ffc-b727-4902e954605f"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "249659f3-8989-4ffc-b727-4902e954605f"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(
		sapimansiongardenspawn,
		"discovery",
		sapimansiongardenspawn.ParentLocationId,
		"h3"
	)
	let sapibiolabspawn = {
		Id: "29d44edd-4f09-4166-90b2-71ce83a5f23a",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_BIOLAB_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_biolab.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_BIOLAB_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "495222ec-e8c9-416a-a41f-4bdfc3e6b80e"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "495222ec-e8c9-416a-a41f-4bdfc3e6b80e"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapibiolabspawn, "discovery", sapibiolabspawn.ParentLocationId, "h3")
	let sapiclocktowerspawn = {
		Id: "14580452-084f-4884-8f86-915f06400d24",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_CAFETOWER_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_cafetower.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_CAFETOWER_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "4970aae5-e4c1-4d5c-a66a-0fc06616211b"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "4970aae5-e4c1-4d5c-a66a-0fc06616211b"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(
		sapiclocktowerspawn,
		"discovery",
		sapiclocktowerspawn.ParentLocationId,
		"h3"
	)
	let sapimorguespawn = {
		Id: "30117f5a-ab68-4f28-95f5-b47df2d07db8",
		Name: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_CHURCHMORGUE_NAME",
		ImageName: "images/challenges/sapienza/sapienza_spawn_location_churchmorgue.jpg",
		Description: "UI_CHALLENGES_SAPIENZA_SPAWN_LOCATION_CHURCHMORGUE_DESC",
		Rewards: {
			MasteryXP: 1000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		Type: "location",
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_COASTALTOWN",
		ParentLocationId: "LOCATION_PARENT_COASTALTOWN",
		TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
		TypeTitle: "UI_LOCATION_PARENT_COASTALTOWN_CITY",
		TypeIcon: "arrowright",
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					HeroSpawn_Location: [
						{
							Condition: {
								$eq: ["$Value.RepositoryId", "1c386bb9-aead-42c0-b604-ad560056ddf4"]
							},
							Transition: "Success"
						},
						{
							Condition: {
								$not: {
									$eq: ["$Value.RepositoryId", "1c386bb9-aead-42c0-b604-ad560056ddf4"]
								}
							},
							Transition: "Failure"
						}
					]
				}
			}
		},
		Tags: ["story", "easy", "discovery"]
	}
	controller.challengeService.registerChallenge(sapimorguespawn, "discovery", sapimorguespawn.ParentLocationId, "h3")
	let marakechchallenges = [
		{
			Id: "7c6c8fc0-ace7-4715-967a-913de2259ff2",
			Name: "UI_CHALLENGES_MARRAKECH_EXIT_STREET_GATE_NAME",
			ImageName: "images/challenges/marrakech/marrakech_exit_street_gate.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_EXIT_STREET_GATE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "fb75a371-8a8a-46ca-8cff-320e16018db3"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "48f8dd09-7e10-4a43-8523-bf18033dbd93",
			Name: "UI_CHALLENGES_MARRAKECH_EXIT_MARKETPLACE_GATE_NAME",
			ImageName: "images/challenges/marrakech/marrakech_exit_marketplace_gate.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_EXIT_MARKETPLACE_GATE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "335b3a7c-87a1-45d4-a4a5-614094841561"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "22877f6d-78a2-4dfb-b884-210ea7cfaab4",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_ROOF_TOP_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_roof_top.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_ROOF_TOP_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "80b8188c-1783-413a-aff6-516c0ab27ffc"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "80b8188c-1783-413a-aff6-516c0ab27ffc"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "1b5de7d7-7ce4-4d64-9e25-2ac7ac2e9930",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SCHOOL_ALLY_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_school_ally.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SCHOOL_ALLY_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "f8aeef13-b522-4351-bc80-810159e629af"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "f8aeef13-b522-4351-bc80-810159e629af"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "17a42565-45f4-405d-92c1-c2ae73b18876",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_STREET_VENDOR_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_street_vendor.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_STREET_VENDOR_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "565614ab-213e-4277-8429-950267941d5e"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "565614ab-213e-4277-8429-950267941d5e"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "2b149f15-d18b-446b-a1b9-cb92ccf0760f",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_CONSULATE_BASEMENT_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_consulate_basement.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_CONSULATE_BASEMENT_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "035838e6-a288-4d1a-a1ae-fba484a7c545"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "035838e6-a288-4d1a-a1ae-fba484a7c545"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "d794ecfe-bd54-40bd-8958-d108ca1fe872",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SNIPER_ROOF_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_sniper_roof.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SNIPER_ROOF_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "de8c6844-9d28-4cfc-a165-baa3373ae811"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "de8c6844-9d28-4cfc-a165-baa3373ae811"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "0b445d02-df9f-41b7-b98f-d3024d940052",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SHISHA_PLACE_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_shisha_place.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SHISHA_PLACE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "52598840-4d4d-46de-9446-5f9c64760105"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "52598840-4d4d-46de-9446-5f9c64760105"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "42a90043-7a86-4e60-834b-da3db660bbca",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_CONSULATE_JANITOR_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_consulate_janitor.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_CONSULATE_JANITOR_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "70f9c93c-57fa-4d61-9cb8-6fcaa0651b0e"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "70f9c93c-57fa-4d61-9cb8-6fcaa0651b0e"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "e5a72fc5-7e71-46b5-904f-eda24cf233de",
			Name: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SCHOOL_DORM_NAME",
			ImageName: "images/challenges/marrakech/marrakech_spawn_location_school_dorm.jpg",
			Description: "UI_CHALLENGES_MARRAKECH_SPAWN_LOCATION_SCHOOL_DORM_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_MARRAKECH",
			ParentLocationId: "LOCATION_PARENT_MARRAKECH",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_MARRAKECH_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "66ff5ba4-8ebc-4526-8e05-cdb8a055a4c8"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "66ff5ba4-8ebc-4526-8e05-cdb8a055a4c8"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		}
	]
	let bangkokchallenges = [
		{
			Id: "261f91c5-4976-4b44-9c18-0231fef86aa0",
			Name: "UI_CHALLENGES_BANGKOK_EXIT_SPEED_BOAT_NAME",
			ImageName: "images/challenges/bangkok/bangkok_exit_speed_boat.jpg",
			Description: "UI_CHALLENGES_BANGKOK_EXIT_SPEED_BOAT_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "1efc13bc-350f-4e16-b446-f42e2b8cce37"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "0d8ee618-81ce-46f7-af86-4751a19a6a23",
			Name: "UI_CHALLENGES_BANGKOK_EXIT_TUK_TUK_NAME",
			ImageName: "images/challenges/bangkok/bangkok_exit_tuk_tuk.jpg",
			Description: "UI_CHALLENGES_BANGKOK_EXIT_TUK_TUK_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "f227d7c6-6094-41ed-902f-b19a06513466"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "70fa8659-5957-4f46-9ba4-676df5dfb9f1",
			Name: "UI_CHALLENGES_BANGKOK_EXIT_TUNNEL_NAME",
			ImageName: "images/challenges/bangkok/bangkok_exit_tunnel.jpg",
			Description: "UI_CHALLENGES_BANGKOK_EXIT_TUNNEL_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "fcb12167-1f43-42d5-b964-77fabe2d53d5"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "e2c80bb2-cffc-4859-8979-03c3a3a48d98",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_SECURITY_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_security.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_SECURITY_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "83f4f967-71bb-48a1-bc53-1e472a9a1b3e"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "83f4f967-71bb-48a1-bc53-1e472a9a1b3e"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "baf5b7b3-3116-4e25-b010-0fd1370efe86",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_KITCHEN_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_kitchen.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_KITCHEN_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "61f8efe4-7e9e-4add-b69e-bf40213209c2"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "61f8efe4-7e9e-4add-b69e-bf40213209c2"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "9bb42d7b-ddd8-443f-b91c-7469a47dba95",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_TV_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_tv.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_TV_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "3aa4388f-6f87-44a4-b3dc-ac015bf65264"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "3aa4388f-6f87-44a4-b3dc-ac015bf65264"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "e9fd9d61-0493-4d00-8737-7bd43c05f90b",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_GARDEN_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_garden.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_GARDEN_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "b33ae290-5ea1-4229-b41f-680a76d40320"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "b33ae290-5ea1-4229-b41f-680a76d40320"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "5b35ad9b-cb43-4f3d-9e51-a09e1baad753",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_BAR_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_bar.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_BAR_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "3d59f7ff-11b5-4498-925d-d3a2ea148a4e"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "3d59f7ff-11b5-4498-925d-d3a2ea148a4e"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "6475d4a7-71a5-4700-a637-a5fee6569574",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_47_SUITE_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_47_suite.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_47_SUITE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "57e5073f-b4e6-4717-a8db-cbc94cb51087"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "57e5073f-b4e6-4717-a8db-cbc94cb51087"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "aa25de59-00a8-40b5-bca2-d72ad7db0fe9",
			Name: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_LINEN_ROOM_NAME",
			ImageName: "images/challenges/bangkok/bangkok_spawn_location_linen_room.jpg",
			Description: "UI_CHALLENGES_BANGKOK_SPAWN_LOCATION_LINEN_ROOM_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_BANGKOK",
			ParentLocationId: "LOCATION_PARENT_BANGKOK",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_BANGKOK_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "c2302bad-8e77-4d72-88c2-36ac1ad8c1b4"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "c2302bad-8e77-4d72-88c2-36ac1ad8c1b4"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		}
	]
	let coloradochallenges = [
		{
			Id: "cd0b9e8e-23c5-4df7-aa18-8ddbd9e86d63",
			Name: "UI_CHALLENGES_COLORADO_EXIT_FRONTGATE_NAME",
			ImageName: "images/challenges/colorado/colorado_exit_frontgate.jpg",
			Description: "UI_CHALLENGES_COLORADO_EXIT_FRONTGATE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "54d88eb5-02ee-4085-9090-8079b4d0b2d3"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "b40ad1b6-d113-41e9-97f7-e14790801d62",
			Name: "UI_CHALLENGES_COLORADO_EXIT_BRIDGE_NAME",
			ImageName: "images/challenges/colorado/colorado_exit_bridge.jpg",
			Description: "UI_CHALLENGES_COLORADO_EXIT_BRIDGE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "33c4dd3d-e22d-418d-834b-2fd090dfbed9"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "f043af23-896e-419c-8bf0-c6076cde6ab0",
			Name: "UI_CHALLENGES_COLORADO_EXIT_BOAT_NAME",
			ImageName: "images/challenges/colorado/colorado_exit_boat.jpg",
			Description: "UI_CHALLENGES_COLORADO_EXIT_BOAT_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "1391a49d-4d91-4a88-8321-f2f475380032"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "852fced5-d3ba-499f-b756-0d30500efb22",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_GARAGE_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_garage.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_GARAGE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "6c943798-8ca7-42cc-861a-becdb32017da"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "6c943798-8ca7-42cc-861a-becdb32017da"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "7f74976b-0fc1-4f03-8094-1bf319269e99",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_CYBER_ROOM_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_cyber_room.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_CYBER_ROOM_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "0cd2b917-eb26-4f19-90c2-a5e16eb18cef"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "0cd2b917-eb26-4f19-90c2-a5e16eb18cef"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "6bf6923b-027a-4079-b00c-3737b3a25bbb",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_GREENHOUSE_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_greenhouse.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_GREENHOUSE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "bd0cc571-e4a3-41f1-9b9b-608cdecc09c1"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "bd0cc571-e4a3-41f1-9b9b-608cdecc09c1"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "2979dfa4-278f-482d-ad8e-598ff9e16e54",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_TOWER_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_tower.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_TOWER_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "53ce9bb6-ef1c-4f17-8951-5b501fb941d4"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "53ce9bb6-ef1c-4f17-8951-5b501fb941d4"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "7ef02113-d453-451d-a88c-e242659148db",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_FIELD_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_field.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_FIELD_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "e5c0d1a4-72b0-4cc0-857d-8bb155ea09f4"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "e5c0d1a4-72b0-4cc0-857d-8bb155ea09f4"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "78b95c45-a94c-491a-9f61-eb76a1545460",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_BRIDGE_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_bridge.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_BRIDGE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "1d3a5b4a-5573-4e2d-8a98-d1c881cbd13e"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "1d3a5b4a-5573-4e2d-8a98-d1c881cbd13e"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "d48862db-4529-425e-a553-eea91833a674",
			Name: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_ORCHARD_NAME",
			ImageName: "images/challenges/colorado/colorado_spawn_location_orchard.jpg",
			Description: "UI_CHALLENGES_COLORADO_SPAWN_LOCATION_ORCHARD_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_COLORADO",
			ParentLocationId: "LOCATION_PARENT_COLORADO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_COLORADO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "370b4106-96f2-4a04-9bc6-029b86b301aa"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "370b4106-96f2-4a04-9bc6-029b86b301aa"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		}
	]
	let hokkaidochallenges = [
		{
			Id: "2dee9939-7ec7-4384-a22d-1fbb9bf1f22f",
			Name: "UI_CHALLENGES_HOKKAIDO_EXIT_SNOWMOBILE_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_exit_snowmobile.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_EXIT_SNOWMOBILE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "a04e479b-cc77-44b8-a92e-4c91b49ea4fd"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "9712a5a8-7699-42a3-9741-55528b6ffea1",
			Name: "UI_CHALLENGES_HOKKAIDO_EXIT_MOUNTAINPASS_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_exit_mountainpass.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_EXIT_MOUNTAINPASS_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "d18218c4-5433-4905-8cd3-2a85014936e2"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "f89a73e8-1796-4e6a-a4ed-ee8f03cbce7e",
			Name: "UI_CHALLENGES_HOKKAIDO_EXIT_CABLECAR_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_exit_cablecar.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_EXIT_CABLECAR_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$eq: ["$Value.RepositoryId", "6940dc59-61b2-4fb2-86cb-ced1df355948"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "d04ba8c5-bae2-4502-94fc-fbe7690d2c07",
			Name: "UI_CHALLENGES_HOKKAIDO_EXIT_HELICOPTER_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_exit_helicopter.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_EXIT_HELICOPTER_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						exit_gate: {
							Condition: {
								$or: [
									{
										$eq: ["$Value.RepositoryId", "c47afc3c-4947-4baa-849a-a8b53df6acc8"]
									},
									{
										$eq: ["$Value.RepositoryId", "3ecfa8cd-1904-4001-9012-a44457d6b1ae"]
									}
								]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "ca33d727-3c52-4661-b74a-01a313c61544",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_SPA_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_spa.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_SPA_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "85ef518f-0e94-4e5e-9fd2-66fb84d2d0bb"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "85ef518f-0e94-4e5e-9fd2-66fb84d2d0bb"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "52bfbe1d-9f20-4968-b68d-158d2d8d7af9",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_RESTAURANT_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_restaurant.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_RESTAURANT_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "be6045fd-26ab-4a3b-a6ce-b1ccdf405d09"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "be6045fd-26ab-4a3b-a6ce-b1ccdf405d09"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "bf6ed3f4-89cc-4a6b-bb61-38f139bfea28",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_KITCHEN_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_kitchen.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_KITCHEN_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "74b1ad25-06cd-41a2-9cf5-9dd5dac7345d"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "74b1ad25-06cd-41a2-9cf5-9dd5dac7345d"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "b6b1e790-736b-4219-98a6-58b507b4f712",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_MORGUE_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_morgue.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_MORGUE_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "bdc80464-31dd-440d-ad79-2767b923a0a4"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "bdc80464-31dd-440d-ad79-2767b923a0a4"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "3e4a38cc-847e-4a75-8b08-7974fea9222c",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_NINJA_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_ninja.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_NINJA_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "0e7dd303-c9bb-42cc-aca0-70499931d098"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "0e7dd303-c9bb-42cc-aca0-70499931d098"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "03142cd6-70f1-45ea-8ae7-89facedfa99b",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_OPERATINGTHEATER_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_operatingtheater.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_OPERATINGTHEATER_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "2fc483c8-500c-4475-ba5d-e2cdd6ccc64c"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "2fc483c8-500c-4475-ba5d-e2cdd6ccc64c"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "7494fc17-1a09-4a47-9e9f-9b2612da7e74",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_GARDEN_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_garden.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_GARDEN_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "df752dfa-623d-4750-83a6-8b4aba1d8e08"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "df752dfa-623d-4750-83a6-8b4aba1d8e08"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		},
		{
			Id: "fffd0120-8402-45fe-8bc8-f3e5882c6b2e",
			Name: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_SLEEPINGQUARTERS_NAME",
			ImageName: "images/challenges/hokkaido/hokkaido_spawn_location_sleepingquarters.jpg",
			Description: "UI_CHALLENGES_HOKKAIDO_SPAWN_LOCATION_SLEEPINGQUARTERS_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_HOKKAIDO",
			ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
			TypeHeader: "UI_MENU_PAGE_CHALLENGE_HEADER_LOCATION",
			TypeTitle: "UI_LOCATION_PARENT_HOKKAIDO_CITY",
			TypeIcon: "arrowright",
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						HeroSpawn_Location: [
							{
								Condition: {
									$eq: ["$Value.RepositoryId", "fedf6cd3-d076-4037-b7d8-1449726b4c0a"]
								},
								Transition: "Success"
							},
							{
								Condition: {
									$not: {
										$eq: ["$Value.RepositoryId", "fedf6cd3-d076-4037-b7d8-1449726b4c0a"]
									}
								},
								Transition: "Failure"
							}
						]
					}
				}
			},
			Tags: ["story", "easy", "discovery"]
		}
	]
	let sfchallenges = [
		{
			Id: "29c12791-02ad-4433-b408-8fd53664a676",
			Name: "UI_CHALLENGES_HIPPO_SIGN_ALL_HIPPO_NAME",
			ImageName: "images/challenges/colombia/hippo_c_sign_all_hippo.jpg",
			Description: "UI_CHALLENGES_HIPPO_SIGN_ALL_HIPPO_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_COLOMBIA",
			ParentLocationId: "LOCATION_PARENT_COLOMBIA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 3
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_HIPPO_SIGN_ALL_HIPPO_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						C_Hungry_Hippo: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "feats", "medium"],
			InclusionData: {
				ContractIds: ["422519be-ed2e-44df-9dac-18f739d44fd9"]
			}
		},
		{
			Id: "aea38ce5-40c8-404c-a2ac-1bcad708fee1",
			Name: "UI_CHALLENGES_COLOMBIA_EXP_FIXSTUFF_NAME",
			ImageName: "images/challenges/colombia/hippo_c_exp_fixstuff.jpg",
			Description: "UI_CHALLENGES_COLOMBIA_EXP_FIXSTUFF_DESC",
			Rewards: {
				MasteryXP: 4000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_COLOMBIA",
			ParentLocationId: "LOCATION_PARENT_COLOMBIA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						Level_Setup_Events: {
							Condition: {
								$eq: ["$Value.Event_metricvalue", "C_FixerUpper"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "hard", "feats"],
			InclusionData: {
				ContractIds: ["422519be-ed2e-44df-9dac-18f739d44fd9"]
			}
		}
	]
	let mumbaichallenges = [
		{
			Id: "d6f5d9e9-f2fe-4d7f-b5eb-f5d86dade878",
			Name: "UI_CHALLENGES_MUMBAI_SHAVE_MUMBAI_NAME",
			ImageName: "images/challenges/Mumbai/Mumbai_Shave.jpg",
			Description: "UI_CHALLENGES_MUMBAI_SHAVE_MUMBAI_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_MUMBAI",
			ParentLocationId: "LOCATION_PARENT_MUMBAI",
			Type: "location",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 15
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_MUMBAI_SHAVE_MUMBAI_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						ShaveMumbaiEvent: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "feats", "medium"]
		},
		{
			Id: "f1ae21ea-d2e2-49e6-97d6-c6c985bb6042",
			Name: "UI_CHALLENGES_MUMBAI_TOUR_NAME",
			ImageName: "images/challenges/Mumbai/Mumbai_Tour.jpg",
			Description: "UI_CHALLENGES_MUMBAI_TOUR_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_MUMBAI",
			ParentLocationId: "LOCATION_PARENT_MUMBAI",
			Type: "location",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Context: {},
				Scope: "session",
				States: {
					Start: {
						TakeTourEvent: {
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "feats", "medium"]
		}
	]
	let Whittletonchallenges = [
		{
			Id: "a46616f0-d1a8-41c9-a728-48e7cd2c39ff",
			Name: "UI_CHALLENGES_GARTERSNAKE_GHOST_NAME",
			ImageName: "images/challenges/Northamerica/Gartersnake_Ghost.jpg",
			Description: "UI_CHALLENGES_GARTERSNAKE_GHOST_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
			Icon: "challenge_category_discovery",
			LocationId: "LOCATION_PARENT_NORTHAMERICA",
			ParentLocationId: "LOCATION_PARENT_NORTHAMERICA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "hit",
				States: {
					Start: {
						GSGhost: {
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "medium", "discovery"],
			InclusionData: {
				ContractIds: ["0b616e62-af0c-495b-82e3-b778e82b5912"]
			}
		},
		{
			Id: "1ec1a4bb-33eb-481d-ba4e-79189139d92e",
			Name: "UI_CHALLENGES_SKUNK_PIGEONS_NAME",
			ImageName: "images/challenges/NORTHAMERICA/SKUNK_Pigeons.jpg",
			Description: "UI_CHALLENGES_SKUNK_PIGEONS_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_NORTHAMERICA",
			ParentLocationId: "LOCATION_PARENT_NORTHAMERICA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 25
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_SKUNK_PIGEONS_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						Pigeons_Event: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "feats", "medium"],
			InclusionData: {
				ContractIds: ["82f55837-e26c-41bf-bc6e-fa97b7981fbc"]
			}
		}
	]
	let sgailchallenges = [
		{
			Id: "0c7cce05-259d-4f22-9c31-92430003cf15",
			Name: "UI_CHALLENGES_NORTHSEA_POISON_CONSTANT_3_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_poison_constant_3times.jpg",
			Description: "UI_CHALLENGES_NORTHSEA_POISON_CONSTANT_3_DESC",
			Rewards: {
				MasteryXP: 1000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						Level_Setup_Events: {
							Condition: {
								$eq: ["$Value.Event_metricvalue", "C_PoisonConstant3_Times"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "easy", "feats"],
			InclusionData: {
				ContractIds: ["0d225edf-40cd-4f20-a30f-b62a373801d3"]
			}
		},
		{
			Id: "589e1391-a26e-4f9a-8c7f-e650ac297814",
			Name: "UI_CHALLENGES_MAGPIE_POISON_ALLMASTERS_TOAST_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_poison_allmasters_toast.jpg",
			Description: "UI_CHALLENGES_MAGPIE_POISON_ALLMASTERS_TOAST_DESC",
			Rewards: {
				MasteryXP: 4000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Scope: "session",
				States: {
					Start: {
						Level_Setup_Events: {
							Condition: {
								$eq: ["$Value.Event_metricvalue", "C_AllMastersPoisoned_Toast"]
							},
							Transition: "Success"
						}
					}
				}
			},
			Tags: ["story", "hard", "feats"],
			InclusionData: {
				ContractIds: ["0d225edf-40cd-4f20-a30f-b62a373801d3"]
			}
		},
		{
			Id: "9da0cd8d-687a-43c4-8441-a2489ede5d41",
			Name: "UI_CHALLENGES_NORTHSEA_CHEF_PACIFY_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_chef_pacify.jpg",
			Description: "UI_CHALLENGES_NORTHSEA_CHEF_PACIFY_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 10
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_NORTHSEA_CHEF_PACIFY_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						C_Chef_Pacify: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "feats", "medium"],
			InclusionData: {
				ContractIds: ["0d225edf-40cd-4f20-a30f-b62a373801d3"]
			}
		},
		{
			Id: "e05d06f5-b175-4208-a3cf-2a241e25fddb",
			Name: "UI_CHALLENGES_MAGPIE_EXP_REUNITE_BLAKE_SERENA_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_reunite_blake_serena.jpg",
			Description: "UI_CHALLENGES_MAGPIE_EXP_REUNITE_BLAKE_SERENA_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_PARENT_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "contract",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 2
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_MAGPIE_EXP_REUNITE_BLAKE_SERENA_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						C_BlakeSophia_Reunited: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "medium", "feats"],
			InclusionData: {
				ContractIds: ["0d225edf-40cd-4f20-a30f-b62a373801d3"]
			}
		},
		{
			Id: "2e78db66-8f7f-4df8-b8c4-f3cfd961d4d9",
			Name: "UI_CHALLENGES_NORTHSEA_PACIFY_10_FISH_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_pacify_10_guards_fish.jpg",
			Description: "UI_CHALLENGES_NORTHSEA_PACIFY_10_FISH_DESC",
			Rewards: {
				MasteryXP: 4000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "location",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 10
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						count: "$.Count",
						total: "$.Goal",
						type: "challengecounter",
						text: "UI_CHALLENGES_NORTHSEA_PACIFY_10_FISH_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						Pacify: [
							{
								Actions: {
									$inc: "Count"
								},
								Condition: {
									$and: [
										{
											$eq: ["$Value.KillItemRepositoryId", "4d0d6b2a-dd81-474c-a412-3bf19af8233d"]
										},
										{
											$eq: ["$Value.ActorType", 1]
										}
									]
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "hard", "feats"]
		},
		{
			Id: "2f5e5738-937f-4928-83d8-3de1292ae58a",
			Name: "UI_CHALLENGES_NORTHSEA_BLEND_KNIGHT_PLINTHS_NAME",
			ImageName: "images/challenges/northsea/magpie_c_exp_use_all_knight_plinths.jpg",
			Description: "UI_CHALLENGES_NORTHSEA_BLEND_KNIGHT_PLINTHS_DESC",
			Rewards: {
				MasteryXP: 2000
			},
			Drops: [],
			IsPlayable: true,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
			Icon: "challenge_category_feats",
			LocationId: "LOCATION_NORTHSEA",
			ParentLocationId: "LOCATION_PARENT_NORTHSEA",
			Type: "location",
			DifficultyLevels: [],
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				Constants: {
					Goal: 8
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal",
						text: "UI_CHALLENGES_NORTHSEA_BLEND_KNIGHT_PLINTHS_NAME"
					}
				},
				Scope: "session",
				States: {
					Start: {
						C_UseAllPlinthsAs_Knight: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			Tags: ["story", "feats", "medium"]
		}
	]
	let kingofthecastle = {
		Id: "347164a7-d63d-46f3-99f2-dce89c7510bf",
		Name: "UI_CHALLENGES_MAGPIE_DUMP_TWINS_PENTHOUSE_NAME",
		ImageName: "images/challenges/northsea/magpie_c_twins_dumped_penthouse.jpg",
		Description: "UI_CHALLENGES_MAGPIE_DUMP_TWINS_PENTHOUSE_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Icon: "challenge_category_assassination",
		LocationId: "LOCATION_PARENT_NORTHSEA",
		ParentLocationId: "LOCATION_PARENT_NORTHSEA",
		Type: "contract",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Constants: {
				Goal: 2
			},
			Context: {
				Count: 0
			},
			ContextListeners: {
				Count: {
					type: "challengecounter",
					count: "$.Count",
					total: "$.Goal",
					text: "UI_CHALLENGES_MAGPIE_DUMP_TWINS_PENTHOUSE_NAME"
				}
			},
			Scope: "session",
			States: {
				Start: {
					C_TwinsDumped_Penthouse: [
						{
							Actions: {
								$inc: "Count"
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "hard", "assassination"],
		InclusionData: {
			ContractIds: ["0d225edf-40cd-4f20-a30f-b62a373801d3"]
		}
	}
	controller.challengeService.registerChallenge(kingofthecastle, "assassination", kingofthecastle.ParentLocationId, "h3")
	let stingraycameras = {
		Id: "b65a65cb-b005-4b30-8490-3bcadff5a545",
		Name: "UI_CHALLENGES_OPULENT_DESTROY_CAMERAS_NAME",
		ImageName: "images/challenges/Opulent/destroy_cameras.jpg",
		Description: "UI_CHALLENGES_OPULENT_DESTROY_CAMERAS_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
		Icon: "challenge_category_discovery",
		LocationId: "LOCATION_OPULENT_STINGRAY",
		ParentLocationId: "LOCATION_PARENT_OPULENT",
		Type: "location",
		DifficultyLevels: [],
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Constants: {
				Goal: 22
			},
			Context: {
				Count: 0
			},
			ContextListeners: {
				Count: {
					type: "challengecounter",
					count: "$.Count",
					total: "$.Goal"
				}
			},
			Scope: "session",
			States: {
				Start: {
					SecuritySystemRecorder: [
						{
							Condition: {
								$eq: ["CameraDestroyed", "$Value.event"]
							},
							Actions: {
								$inc: "Count"
							}
						},
						{
							Condition: {
								$eq: ["$.Count", "$.Goal"]
							},
							Transition: "Success"
						}
					]
				}
			}
		},
		Tags: ["story", "hard", "discovery"]
	}
	controller.challengeService.registerChallenge(stingraycameras, "discovery", stingraycameras.ParentLocationId, "h3")
	for (let i = 0; i < marakechchallenges.length; i++) {
		let currentEntry = marakechchallenges[i]
		currentEntry.Type = "location"

		controller.challengeService.registerChallenge(currentEntry, "discovery", currentEntry.ParentLocationId, "h3")
	}

	for (let i = 0; i < bangkokchallenges.length; i++) {
		let currentEntry = bangkokchallenges[i]
		currentEntry.Type = "location"

		controller.challengeService.registerChallenge(currentEntry, "discovery", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < sfchallenges.length; i++) {
		let currentEntry = sfchallenges[i]

		controller.challengeService.registerChallenge(currentEntry, "feats", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < mumbaichallenges.length; i++) {
		let currentEntry = mumbaichallenges[i]

		controller.challengeService.registerChallenge(currentEntry, "feats", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < Whittletonchallenges.length; i++) {
		let currentEntry = Whittletonchallenges[i]

		controller.challengeService.registerChallenge(currentEntry, "feats", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < sgailchallenges.length; i++) {
		let currentEntry = sgailchallenges[i]

		controller.challengeService.registerChallenge(currentEntry, "feats", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < coloradochallenges.length; i++) {
		let currentEntry = coloradochallenges[i]
		currentEntry.Type = "location"

		controller.challengeService.registerChallenge(currentEntry, "discovery", currentEntry.ParentLocationId, "h3")
	}
	for (let i = 0; i < hokkaidochallenges.length; i++) {
		let currentEntry = hokkaidochallenges[i]
		currentEntry.Type = "location"

		controller.challengeService.registerChallenge(currentEntry, "discovery", currentEntry.ParentLocationId, "h3")
	}
	controller.challengeService.registerChallenge(
		tuppenceawishchallenge,
		"feats",
		tuppenceawishchallenge.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(shahchallenge, "assassination", shahchallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(sebastianchallenge, "feats", sebastianchallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(
		delgadolarcenychallenge,
		"feats",
		delgadolarcenychallenge.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(gasgrenadechallenge, "feats", gasgrenadechallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(hotsummerchallenge, "feats", hotsummerchallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(okaystephenking, "feats", okaystephenking.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(
		putthelimeinthecoconut,
		"assassination",
		putthelimeinthecoconut.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(actualtorture, "assassination", actualtorture.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parisbasement, "discovery", parisbasement.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parischopper, "discovery", parisbasement.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parislockerspawn, "discovery", parislockerspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parisauctionspawn, "discovery", parisauctionspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parisdressingspawn, "discovery", parisdressingspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parisavspawn, "discovery", parisavspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(parisbargespawn, "discovery", parisbargespawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(
		parispalacebargespawn,
		"discovery",
		parispalacebargespawn.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(parisatticspawn, "discovery", parisatticspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(pariskitchenspawn, "discovery", pariskitchenspawn.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(
		ghostrunnerprotagbelike,
		"feats",
		ghostrunnerprotagbelike.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(
		thatscrazybrobutdidIask,
		"feats",
		thatscrazybrobutdidIask.ParentLocationId,
		"h3"
	)
	controller.challengeService.registerChallenge(sureican, "feats", sureican.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(lit, "feats", lit.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(homerun, "feats", homerun.ParentLocationId, "h3")
	let stonesniper1 = {
		Id: "920561a4-f544-4377-b0b0-b19e732be8b6",
		Name: "STONE_COLD",
		ImageName: "images/ui/sc/firearms_sc_hero_sniper_stone_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_MELEE_STONE_SNIPER_AUSTRIA"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_AUSTRIA",
		ParentLocationId: "LOCATION_PARENT_AUSTRIA",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "assassination"],
		InclusionData: {
			ContractIds: ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"]
		}
	}
	let knightsniper1 = {
		Id: "420a2e91-b9e6-474d-b637-30922eb7527e",
		Name: "KNIGHT_KNIGHT",
		ImageName: "images/ui/sc/firearms_sc_hero_sniper_knight_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_MELEE_KNIGHT_SNIPER_AUSTRIA"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_AUSTRIA",
		ParentLocationId: "LOCATION_PARENT_AUSTRIA",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "assassination"],
		InclusionData: {
			ContractIds: ["ff9f46cf-00bd-4c12-b887-eac491c3a96d"]
		}
	}
	let fourtysevensniper1 = {
		Id: "d1d5e04d-5605-4556-a814-5d8313613a2a",
		Name: "47_SNIPER",
		ImageName: "images/ui/sc/firearms_sc_seagull_hm_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_47_SNIPER_HANTU"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_SALTY",
		ParentLocationId: "LOCATION_PARENT_SALTY",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "feats"],
		InclusionData: {
			ContractIds: ["00e57709-e049-44c9-a2c3-7655e19884fb"]
		}
	}
	let stonesniper2 = {
		Id: "072caef2-41af-4502-988d-65836f3469ba",
		Name: "STONE_COLD",
		ImageName: "images/ui/sc/firearms_sc_seagull_stone_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_STONE_SNIPER_HANTU"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_SALTY",
		ParentLocationId: "LOCATION_PARENT_SALTY",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "feats"],
		InclusionData: {
			ContractIds: ["00e57709-e049-44c9-a2c3-7655e19884fb"]
		}
	}
	let knightsniper2 = {
		Id: "9f33fa97-4591-47ec-9234-b318fffcadc6",
		Name: "KNIGHT_KNIGHT",
		ImageName: "images/ui/sc/firearms_sc_seagull_knight_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_KNIGHT_SNIPER_HANTU"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_SALTY",
		ParentLocationId: "LOCATION_PARENT_SALTY",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "feats"],
		InclusionData: {
			ContractIds: ["00e57709-e049-44c9-a2c3-7655e19884fb"]
		}
	}
	let stonesniper3 = {
		Id: "48212df0-b13e-4206-944f-8e0561495f4c",
		Name: "STONE_COLD",
		ImageName: "images/ui/sc/firearms_sc_falcon_stone_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_KNIGHT_SNIPER_PRISON"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_CAGED",
		ParentLocationId: "LOCATION_PARENT_CAGED",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "feats"],
		InclusionData: {
			ContractIds: ["25b20d86-bb5a-4ebd-b6bb-81ed2779c180"]
		}
	}
	let knightniper3 = {
		Id: "ad485f6f-f061-4d41-96cf-b0fee806fb0d",
		Name: "KNIGHT_KNIGHT",
		ImageName: "images/ui/sc/firearms_sc_falcon_knight_inparts.jpg",
		Description: "SNIPER_GENERIC_DESC",
		Rewards: {
			MasteryXP: 0
		},
		Drops: ["PROP_STONE_SNIPER_PRISON"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: true,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_CAGED",
		ParentLocationId: "LOCATION_PARENT_CAGED",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			States: {
				Start: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["story", "feats"],
		InclusionData: {
			ContractIds: ["25b20d86-bb5a-4ebd-b6bb-81ed2779c180"]
		}
	}
	controller.challengeService.registerChallenge(stonesniper1, "feats", "LOCATION_PARENT_AUSTRIA", "h3")
	controller.challengeService.registerChallenge(knightsniper1, "feats", "LOCATION_PARENT_AUSTRIA", "h3")
	controller.challengeService.registerChallenge(fourtysevensniper1, "feats", "LOCATION_PARENT_SALTY", "h3")
	controller.challengeService.registerChallenge(stonesniper2, "feats", "LOCATION_PARENT_SALTY", "h3")
	controller.challengeService.registerChallenge(knightsniper2, "feats", "LOCATION_PARENT_SALTY", "h3")
	controller.challengeService.registerChallenge(stonesniper3, "feats", "LOCATION_PARENT_CAGED", "h3")
	controller.challengeService.registerChallenge(knightniper3, "feats", "LOCATION_PARENT_CAGED", "h3")
	controller.challengeService.removeChallenge(casechallenge.Id, "h3")
	controller.challengeService.removeChallenge(boscochallenge.Id, "h3")
	controller.challengeService.removeChallenge(politicianchallenge.Id, "h3")
	controller.challengeService.removeChallenge(cashmerianchallenge.Id, "h3")
	controller.challengeService.removeChallenge(axechallenge.Id, "h3")
	controller.challengeService.registerChallenge(boscochallenge, "targets", boscochallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(politicianchallenge, "targets", politicianchallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(cashmerianchallenge, "feats", cashmerianchallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(casechallenge, "feats", casechallenge.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(phonechal, "feats", phonechal.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(sparkymarakech, "feats", sparkymarakech.ParentLocationId, "h3")
	controller.challengeService.registerChallenge(axechallenge, "feats", axechallenge.ParentLocationId, "h3")
	const SapienzaexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_COASTALTOWN", "h3")
	SapienzaexistingMasteryData.Drops.splice(SapienzaexistingMasteryData.Drops.length - 1, 0, {
		Id: "PROP_DEVICE_ICA_RUBBERDUCK_PROXIMITY_EXPLOSIVE",
		Level: 20
	})
	SapienzaexistingMasteryData.Drops = SapienzaexistingMasteryData.Drops.filter(
		(drop) => drop.Id !== "PROP_DISTRACTION_FIRECRACKER"
	)
	controller.masteryService.registerMasteryData(SapienzaexistingMasteryData)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3").Drops.length - 8, 0, {
			Id: "PROP_MELEE_PHONE_CORD",
			Level: 9
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3")
		.Drops.splice(
			controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3").Drops.length - 5,
			0,
			{ Id: "FIREARMS_PISTOL_DARTGUN_SEDATIVE", Level: 16 }
		)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3")
		.Drops.splice(
			controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3").Drops.length - 1,
			0,
			{ Id: "FIREARMS_SMG_RUDE_RUBY", Level: 20 }
		)
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_NORTHSEA", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHSEA", "h3").Drops.length - 9, 0, {
			Id: "PROP_DEVICE_REMOTE_CONCUSSION",
			Level: 13
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHSEA", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_NEWZEALAND", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_NEWZEALAND", "h3").Drops.length - 4, 0, {
			Id: "PROP_DEVICE_ICA_TRIPWIRE_EXPLOSIVE",
			Level: 3
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_NEWZEALAND", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_MIAMI", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_MIAMI", "h3").Drops.length - 6, 0, {
			Id: "PROP_DEVICE_ICA_MICRO_REMOTE_EXPLOSIVE",
			Level: 17
		})
	controller.masteryService.registerMasteryData(controller.masteryService.getMasteryPackage("LOCATION_PARENT_MIAMI", "h3"))
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_ELEGANT", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_ELEGANT", "h3").Drops.length - 4, 0, {
			Id: "FIREARMS_HERO_SHOTGUN_SILENCED",
			Level: 17
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_ELEGANT", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_ANCESTRAL", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_ANCESTRAL", "h3").Drops.length - 14, 0, {
			Id: "PROP_DEVICE_ICA_MODULAR_BREACHCHARGE_S3",
			Level: 9
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_ANCESTRAL", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_HOKKAIDO", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_HOKKAIDO", "h3").Drops.length - 10, 0, {
			Id: "FIREARMS_HERO_SMG_TACTICAL_012_ST_AIM_SU_SKIN03",
			Level: 14
		})
	controller.masteryService.registerMasteryData(
		controller.masteryService.getMasteryPackage("LOCATION_PARENT_HOKKAIDO", "h3")
	)
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_ROCKY", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_ROCKY", "h3").Drops.length - 10, 0, {
			Id: "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_FA_STEALTH_DUCKY",
			Level: 11
		})
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_ROCKY", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_ROCKY", "h3").Drops.length - 1, 0, {
			Id: "FIREARMS_SNIPER_ICA_HACKL_LEVIATHAN_COVERT_DUCKY",
			Level: 20
		})
	controller.masteryService.registerMasteryData(controller.masteryService.getMasteryPackage("LOCATION_PARENT_ROCKY", "h3"))
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_COLOMBIA", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_COLOMBIA", "h3").Drops.length - 13, 0, {
			Id: "PROP_DEVICE_ICA_MODULAR_REMOTE_BREACHCHARGE_S2",
			Level: 12
		})
	if (!controller.smf.modIsInstalled("anthonyfuller.phonegobuzz")) {
	} else {
		controller.configManager.configs.allunlockables.forEach((unlockable) => {
			if (unlockable.Id === "PACKAGE_STARTING_PACKAGE") {
				unlockable.Properties.Unlocks = [
					"TOKEN_FIBERWIRE",
					"PROP_TOOL_COIN",
					"FIREARMS_HERO_PISTOL_TACTICAL_ICA_19",
					"TOKEN_OUTFIT_HITMANSUIT",
					"TOKEN_OUTFIT_PARIS_HERO_PARISSUIT",
					"FIREARMS_SC_HERO_SNIPER_HM",
					"EMOTE_GENERIC_KISS_01",
					"EMOTE_GENERIC_SLOW_CLAP",
					"EMOTE_GENERIC_POINT_EYES",
					"EMOTE_GENERIC_SHAKEHEAD_03"
				]
			}
		})
		controller.masteryService
			.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3")
			.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3").Drops.length - 1, 0, {
				Id: "PROP_DEVICE_ICA_REMOTE_ELECTRICUTION_PHONE",
				Level: 19
			})
		controller.masteryService.registerMasteryData(
			controller.masteryService.getMasteryPackage("LOCATION_PARENT_GREEDY", "h3")
		)
	}
	controller.masteryService
		.getMasteryPackage("LOCATION_PARENT_WET", "h3")
		.Drops.splice(controller.masteryService.getMasteryPackage("LOCATION_PARENT_WET", "h3").Drops.length - 5, 0, {
			Id: "PROP_DEVICE_ICA_SEMTEX_REMOTE_EXPLOSIVE_S3",
			Level: 17
		})
	controller.masteryService.registerMasteryData(controller.masteryService.getMasteryPackage("LOCATION_PARENT_WET", "h3"))
	let MasterAssassinChallengePack = [
		{
			Id: "3042b6f5-5610-4439-9b1e-b56317918df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T1",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_1.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T1_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_HERO_TERMINUS_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				States: {
					Start: {
						ContractEnd: {
							Transition: "Success"
						}
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "2041a6f5-5610-4439-9b1e-b56317918df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T2",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_2.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T2_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_LEGACY_HERO_ABSOLUTIONSUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 3
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "2041a6f5-5610-4439-9b1e-b51237918df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T3",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_3.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T3_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_LEGACY_HERO_BLOODMONEYSUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 5
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1041a6f5-5610-4439-9b1e-b51237918df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T4",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_4.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T4_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_LEGACY_HERO_SIGNATURESUITANDGLOVES"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 7
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1041a6f5-5610-4439-9b1e-b51737918df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T5",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_5.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T5_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_ELUSIVE_COMPLETE_12_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 9
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1041a6f5-5610-4439-9b1e-b51737818df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T6",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_6.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T6_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_ELUSIVE_COMPLETE_15_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 11
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1041a7f5-5610-4439-9b1e-b51737818df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T7",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_7.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T7_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_HERO_WINTER_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 13
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1041a7f5-5610-4420-9b1e-b51737818df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T8",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_8.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T8_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_REWARD_HERO_SB_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 15
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1a9c1432-48f7-49d4-8b44-2eff80ac34d2",
			Name: "UI_CHALLENGES_GLOBAL_MA_T9",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_9.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T9_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_REWARD_HERO_PEN_FIGHT_SUIT"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 17
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		},
		{
			Id: "1071a7f5-5610-4420-9b1e-b51737818df8",
			Name: "UI_CHALLENGES_GLOBAL_MA_T10",
			ImageName: "images/challenges/profile_challenges/escalation_s2_tier_10.jpg",
			Description: "UI_CHALLENGES_GLOBAL_MA_T10_DESC",
			Rewards: {
				MasteryXP: 0
			},
			Drops: ["TOKEN_OUTFIT_TOMORROWLAND_SUIT_REWARD"],
			IsPlayable: false,
			IsLocked: false,
			HideProgression: false,
			CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
			Icon: "challenge_category_feats",
			LocationId: "",
			ParentLocationId: "",
			Type: "global", // Make sure to mark is a global type
			DifficultyLevels: ["hard"],
			OrderIndex: 90001,
			Xp: 47000,
			XpModifier: {},
			RuntimeType: "Hit",
			Definition: {
				// Since it's an example, challenge will be finished if you kill anyone.
				Scope: "hit",
				Constants: {
					Goal: 19
				},
				Context: {
					Count: 0
				},
				ContextListeners: {
					Count: {
						type: "challengecounter",
						count: "$.Count",
						total: "$.Goal"
					}
				},
				States: {
					Start: {
						ContractEnd: [
							{
								Actions: {
									$inc: "Count"
								}
							},
							{
								Condition: {
									$eq: ["$.Count", "$.Goal"]
								},
								Transition: "Success"
							}
						]
					}
				}
			},
			// Those don't really do anything, but it's a good idea to populate the tags.
			Tags: ["story", "hard", "MasterAssassinChallengePack"],
			InclusionData: {
				ContractTypes: ["mission", "escalation", "elusive", "featured", "tutorial"]
			}
		}
	]
	let MasterAssassinChallengePackGroup = {
		Name: "UI_MENU_PAGE_PROFILE_CHALLENGES_MA",
		// Image will be shown in the challenges menu when all challenges are complete
		Image: "images/challenges/categories/classic/tile.jpg",
		Icon: "challenge_category_feats",
		CategoryId: "MasterAssassinChallengePack",
		Description: "Example of creating custom challenges",
		// OrderIndex dictates the position of the group in the menu.
		// Usually should be above 6 to be shown after all other built-in groups.
		// Can be a floating point value.
		OrderIndex: 4.1,
		Challenges: [...MasterAssassinChallengePack]
	}
	controller.challengeService.challengePacks.set(MasterAssassinChallengePackGroup.CategoryId, {
		Name: MasterAssassinChallengePackGroup.Name,
		Description: MasterAssassinChallengePackGroup.Description,
		GameVersions: ["h3"],
		Image: MasterAssassinChallengePackGroup.Image,
		Icon: "challenge_category_feats"
	})
	controller.challengeService.registerGroup(MasterAssassinChallengePackGroup, "GLOBAL_MASTERASS", "h3")

	controller.challengeService.registerChallengeList(
		MasterAssassinChallengePack,
		MasterAssassinChallengePackGroup.CategoryId,
		"GLOBAL_MASTERASS",
		"h3"
	)
	controller.challengeService.globalMergeGroups.set(MasterAssassinChallengePackGroup.CategoryId, {
		gameVersions: ["h3"],
		groupId: MasterAssassinChallengePackGroup.CategoryId,
		location: "GLOBAL_MASTERASS",
		// The `allLocations` flag is optional, but will enforce presence of global group everywhere,
		// regardless of this group challenges presence in the location.
		// See documentation on `allLocations` flag for more details and gotchas.
		allLocations: true
	})
	controller.masteryService.rebuildDropIndexes("h3")
}
