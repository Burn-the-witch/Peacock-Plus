const { existsSync } = require("fs")
const { readdir } = require("fs/promises")
const { cheapLoadUserData, getUserData, writeUserData } = require("@peacockproject/core/databaseHandler")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

// Place **FIVE LEVEL GROUP CONTRACT** IDs into this array to reduce them to 3 level 
const ESCALATIONS_TO_CONVERT = [
  "45c831c4-b455-4d21-90f3-6f09b28ee01b",
  "f425e64f-99df-4ebf-9f7d-909a65a26aef",
  "1f785def-03b7-4340-af7e-2f5831e77eb5",
  "ccbde3e2-67e7-4534-95ec-e9bd7ef65273",
  "aee6a16f-6525-4d63-a37f-225e293c6118",
  "c469d91d-01fc-4314-b22c-71cb804e92c0",
  "77c7b56f-2410-4919-a4bc-64435c6cff55",
  "d6961637-effe-4c39-b99a-f2df4402657d",
  "5746f21e-efa1-4787-a9ca-99a5f233f507",
  "edeca4db-7394-4e93-9b6d-00581f16d6c1",
  "39f03892-a841-4775-91ac-f8c91b485505",
  "ebf8e5b5-3bf0-487e-8d1b-9473aee61291",
  "bfb0d544-b4c9-4533-bed4-4562a43a3f40",
  "e6be23e8-8602-42c8-a014-17ffbfa053f5",
  "e01113e6-f27d-4ea1-a8ba-93062335bbf5",
  "51038604-c3f4-41e9-889b-25d9d5de93c6",
  "ced3ecb8-70ab-40b0-b033-6f6235c61900",
  "c1db299f-3037-4726-b9fc-5cd951c45812",
  "0e5c23b1-4678-458b-ad98-8b55c268e90a",
  "e75663c8-afca-45a1-af18-25fe3e663848",
  "2e365b7c-817d-4213-8fb1-496fa8067e7b",
  "a1e7fdb4-88a4-4dbd-9ef2-d9bd1762cec2",
  "54e6c794-2855-4ecf-acc2-d7710d5d96d1",
  "994540ee-3900-4a41-9544-17b2196a4b1a",
  "95bb86f8-fbbf-4eb0-b2fa-bd379c0a4878",
  "5a8bdb42-b11e-47d1-bc57-b4bf7efa9eda",
  "d43600cd-1128-4d59-bf87-075c73ae9776",
  "3d9dcf91-1708-4e22-88b3-41d184bcc8c3",
  "0c4c6ce2-09d5-4fff-a946-099ced0558ea",
  "ee7e831b-f7ea-4803-8eba-80b42d020a7c",
  "641656f8-ab16-49c5-a09b-952738154b64",
  "525bd318-04e6-4672-9d01-6bba74362fc5",
  "fab808f9-e88b-4775-aadb-a462c86bf2d9",
  "74739eda-6ed5-4318-a501-2fa0bd53ef5a",
  "f08934c0-73f3-460c-a612-231035131c96",
  "8dec1e62-bbf9-438c-8495-24559c884466",
  "4b6739eb-bcdb-48ad-8c45-a829794175e1",
  "ebf8ab97-6ff3-4063-9737-c6f237031de7",
  "c2e16fb7-d49f-49ef-9d76-46b8b31b3389",
  "896233eb-e7c5-4915-bf2b-5867799d8bb4",
  "c67a1ead-7489-4d88-bbd2-c68d735e5df0",
  "19660896-fc1f-49f9-b56b-2059137530e4",
  "11c93649-6b00-46ac-bf2d-a3599a6ab3a9",
  "45e6d255-f8e4-4170-ad7e-3416ab8a881d",
  "e359075e-a510-4b7c-a461-477b789ca7e4",
  "c949817b-5212-42e8-9b06-9a2eb83de167",
  "c5d88e8c-437b-476b-afe2-d94aa4293502",
  "e6f4d3a4-9a33-4bd9-b761-da297069cf8c",
  "4186dd23-1cfc-4ba0-9863-9f19f7cba249",
  "a1e5f4f4-ea9c-4a42-b826-50a212026d50",
  "88451dd9-4b57-441e-9eab-e20b9879bafa",
  "85a2b618-2e3c-444f-931c-b89d566e45f7",
  "e96fb040-a13f-466c-9d96-c8f3b2b8a09a",
]

// DO NOT MODIFY
const CONVERSION_CACHE = {}

module.exports = async function (controller) {
    // This only runs once
    for (const id of ESCALATIONS_TO_CONVERT) {
        const contract = controller.resolveContract(id, "h3")
        contract.Metadata.GroupDefinition.Order = contract.Metadata.GroupDefinition.Order.filter((_, index) => [0, 2, 4].includes(index))

        const contractsToRename = contract.Metadata.GroupDefinition.Order
        for (const EscalationLevel of contractsToRename) {
          const actualcontract = controller.resolveContract(EscalationLevel, "h3")
          actualcontract.Metadata.Title = actualcontract.Metadata.Title.replace(/3/g, "2").replace(
            /5/g,
            "3",
          )

          controller.addMission(actualcontract);
        }

        CONVERSION_CACHE[id] = contract
    }

    if (existsSync("userdata/users")) {
        const userIds = []

        try {
            const files = await readdir("userdata/users")
            for (const name of files) {
                const id = name.split(".")[0]
                if (id !== "lop") userIds.push(id)
            }
        } catch {
            log(LogLevel.WARN, "Failed to change user profiles. This may cause issues!", "Escalation Converter")
        }

        for (const id of userIds) {
            let modified = false
            await cheapLoadUserData(id, "h3")
            const data = getUserData(id, "h3")

            for (const eId of ESCALATIONS_TO_CONVERT) {
                if (data.Extensions.PeacockEscalations?.[eId] >= 4) {
                    modified = true
                    data.Extensions.PeacockEscalations[eId] = 3
                }
            }

            if (modified) writeUserData(id, "h3")
        }
    }

    controller.hooks.getContractManifest.tap("EscalationLevelConverter", (id, gv) => {
        return (gv !== "h3" || !ESCALATIONS_TO_CONVERT.includes(id)) ? undefined : CONVERSION_CACHE[id]
    })
}