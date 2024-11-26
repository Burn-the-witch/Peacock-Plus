const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
module.exports = function test(controller) {
	if (Math.abs(PEACOCKVER) < 7350) {
		log(LogLevel.ERROR, `This plugin requires Peacock version v7.3.5 or higher! You're on v${PEACOCKVERSTRING}!`)
		return
	}
	//Paris Mastery Overrides
	Facilitymasterydata = {
		LocationId: "LOCATION_PARENT_ICA_FACILITY",
		GameVersions: ["h3"],
		MaxLevel: 5,
		Drops: [
			{
				Id: "PROP_TOOL_COIN",
				Level: 1
			},
			{
				Id: "TOKEN_FIBERWIRE",
				Level: 2
			},
			{
				Id: "PROP_TOOL_LOCK_PICK",
				Level: 3
			},
			{
				Id: "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19",
				Level: 4
			},
			{
				Id: "TOKEN_OUTFIT_LEGACY_HERO_SIGNATURESUITANDGLOVES",
				Level: 5
			}
		]
	}
	controller.masteryService.registerMasteryData(Facilitymasterydata)
	const parisexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_TRAPPED", "h3")
	parisexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_REWARD_HERO_WOLVERINE_SUIT",
		Level: 5
	})
	controller.masteryService.registerMasteryData(parisexistingMasteryData)
	const CMexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_PARIS", "h3")
	CMexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_PARISSUITANDGLOVES",
		Level: 20
	})
	controller.masteryService.registerMasteryData(CMexistingMasteryData)
	//Sapienza Mastery Ovverides
	const SapienzaexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_COASTALTOWN", "h3")
	SapienzaexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_SAPIENZASUITANDGLOVES",
		Level: 20
	})
	controller.masteryService.registerMasteryData(SapienzaexistingMasteryData)
	//Marakech Mastery Ovverides
	const MarakechexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_MARRAKECH", "h3")
	MarakechexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_MARRAKESHSUITANDGLOVES",
		Level: 20
	})
	controller.masteryService.registerMasteryData(MarakechexistingMasteryData)
	const BangkokexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_BANGKOK", "h3")
	BangkokexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_BANGKOKSUITANDGLOVES",
		Level: 20
	})
	controller.masteryService.registerMasteryData(BangkokexistingMasteryData)
	const ColoradoexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_COLORADO", "h3")
	ColoradoexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_COLORADOSUIT_ALTERNATIVE",
		Level: 20
	})
	controller.masteryService.registerMasteryData(ColoradoexistingMasteryData)
	const HokkaidoexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_HOKKAIDO", "h3")
	HokkaidoexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HERO_HOKKAIDOSUIT_ET_ALTERNATIVE",
		Level: 20
	})
	controller.masteryService.registerMasteryData(HokkaidoexistingMasteryData)
	const hawkseexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NEWZEALAND", "h3")
	hawkseexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_WET_SUIT",
		Level: 5
	})
	controller.masteryService.registerMasteryData(hawkseexistingMasteryData)
	const miamiexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_MIAMI", "h3")
	miamiexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_FLAMINGO_ELUSIVE_SUIT",
		Level: 20
	})
	controller.masteryService.registerMasteryData(miamiexistingMasteryData)
	const SFexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_COLOMBIA", "h3")
	SFexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_HIPPO_ELUSIVE_SUIT",
		Level: 20
	})
	controller.masteryService.registerMasteryData(SFexistingMasteryData)
	const mexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_MUMBAI", "h3")
	mexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_MONGOOSE_ELUSIVE_SUIT",
		Level: 20
	})
	controller.masteryService.registerMasteryData(mexistingMasteryData)
	const WHexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHAMERICA", "h3")
	WHexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_NORTHAMERICA_ELUSIVE_SUIT",
		Level: 20
	})
	controller.masteryService.registerMasteryData(WHexistingMasteryData)
	const SGexistingMasteryData = controller.masteryService.getMasteryPackage("LOCATION_PARENT_NORTHSEA", "h3")
	SGexistingMasteryData.Drops.push({
		Id: "TOKEN_OUTFIT_MAGPIE_ELUSIVE_SUIT",
		Level: 20
	})
	controller.masteryService.registerMasteryData(SGexistingMasteryData)
	controller.challengeService.removeChallenge("1f469f6e-93a6-4b8b-9fe1-8ccc9bff5e1c", "h3")

	controller.challengeService.removeChallenge("12937274-4d85-477d-b20d-fddb408a1015", "h3")
	controller.challengeService.removeChallenge("9c399562-230b-4964-9945-9ee07e888838", "h3")
	controller.challengeService.removeChallenge("889f5682-4de6-4a36-9232-5fcd336c7a18", "h3")
	controller.challengeService.removeChallenge("689fb08e-fb6d-4d41-84ba-8f819d5c89cd", "h3")
	controller.challengeService.removeChallenge("efd539cf-7b0e-4940-b8dd-a7407deea12f", "h3")
	controller.challengeService.removeChallenge("ef3d5783-d838-48a3-90ee-0e8afbd76877", "h3")
	controller.challengeService.removeChallenge("8bdce1b3-1508-472b-b0d3-ac674724835d", "h3")
	controller.challengeService.removeChallenge("3c1b1cce-5626-48e2-a157-446097b95c6a", "h3")
	controller.challengeService.removeChallenge("bbe16ff6-77df-4b9e-811e-29fa86e5fd44", "h3")
	controller.challengeService.removeChallenge("7df7f8ea-7341-4000-a359-9928b74c02e6", "h3")
	controller.challengeService.removeChallenge("a2b3c3c6-148d-4543-a689-177edf391576", "h3")
	controller.challengeService.removeChallenge("ba8cd104-b198-41e3-acba-f560f396dd97", "h3")
	let Woachallengesbutnotreally = {
		Id: "1f469f6e-93a6-4b8b-9fe1-8ccc9bff5e1c",
		Name: "UI_CHALLENGES_FLU_PATIENT_47_NAME",
		ImageName: "images/challenges/Hokkaido/flu_patient_47.jpg",
		Description: "UI_CHALLENGES_FLU_PATIENT_47_DESC",
		Rewards: {
			MasteryXP: 2000
		},
		Drops: [],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
		Icon: "challenge_category_feats",
		LocationId: "LOCATION_PARENT_HOKKAIDO",
		ParentLocationId: "LOCATION_PARENT_HOKKAIDO",
		Type: "contract",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Context: {},
			Constants: {
				HIPS: [
					"ab1b6335-685e-44a8-ba1e-4a992814b753",
					"47666ef1-c1a7-4cfa-9cac-514c4f894d76",
					"3a2172af-cf6f-4da3-8ed6-9b33058f718e",
					"c9940d3b-0fbc-4d2b-9a4a-80251d63c121",
					"00efa3fc-e1fe-47d8-8eac-f0a661413b0a"
				]
			},
			Scope: "session",
			States: {
				Start: {
					"47_Infected": {
						Transition: "CheckLieDown"
					}
				},
				CheckLieDown: {
					setpieces: {
						Condition: {
							$any: {
								"?": {
									$eq: ["$.#", "$Value.RepositoryId"]
								},
								in: "$.HIPS"
							}
						},
						Transition: "CheckCompletion"
					},
					"47_Cured": {
						Transition: "Failure"
					}
				},
				CheckCompletion: {
					ContractEnd: {
						Transition: "Success"
					}
				}
			}
		},
		Tags: ["live", "medium", "feats"],
		InclusionData: {
			ContractIds: ["a2befcec-7799-4987-9215-6a152cb6a320"]
		}
	}
	controller.challengeService.registerChallenge(
		Woachallengesbutnotreally,
		"feats",
		Woachallengesbutnotreally.ParentLocationId,
		"h3"
	)
	controller.masteryService.rebuildDropIndexes("h3")
}
