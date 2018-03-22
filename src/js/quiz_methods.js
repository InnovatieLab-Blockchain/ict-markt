let web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);
const MNID = uportconnect.MNID;
const Credentials = uportconnect.Credentials;
const Connect = uportconnect.Connect;
const SimpleSigner = uportconnect.SimpleSigner;


// const duo_connector = new Connect('DUO', {
//     clientId: '2oynp4geSgBwqkQebaYtexB32rCNbPmLu5K',
//     network: 'rinkeby',
//     signer: SimpleSigner('69c9446852693c00bd0a8825fad8297e4f9db34c9562a660585a0e767f993bd7')
// });

const lab_connector = new Connect('Innovatielab Blockchain', {
    clientId: '2osVEge5GkpT3tJWdzr2TpfwdjsEo27MEoc',
    network: 'rinkeby',
    signer: SimpleSigner('497369198844fe973c9cadc8bdc5b0634fe01cd3ffe69944884cb6506c7f7be4')
});


// global variables to reuse
let user_data = {};

// print credentials in console to test
function show_credentials() {
    console.log("Country = " + user_data.uportCountry);
    console.log("Name = " + user_data.uportName)
}

// uPort request credentials
const quiz_connect = function () {
    lab_connector.requestCredentials({
        requested: ['name', 'country', 'avatar'],
        // callbackUrl:'student.html',
        notifications: true // We want this if we want to recieve credentials
    })
        .then((credentials) => {
        // Do something (in this case print all credentials)
        console.log("Credentials:", credentials);
    user_data.uportId = credentials.address;
    user_data.uportName = credentials.name;
    user_data.uportCountry = credentials.country;
    user_data.uportAvatar = credentials.avatar;
    var userName = user_data.uportName;
    var UportAvatar = user_data.uportAvatar;
    document.getElementById("login").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("after_loginName").style.display = "inline";
    document.getElementById("userName").innerHTML = userName;
    document.getElementById("after_login").style.display = "inline";
    // window.location.href = "studen t.html";
});
};

// // attest/issue badge
// const uportAttest = function () {
//     lab_connector.attestCredentials({
//         sub: user_data.uportId,
//         claim: {
//             Blockchainquiz: {
//                 naam: 'LABMASTER',
//                 description: 'Je had alle vragen goed bij de blockchainquiz en daarmee heb je de titel "LABMASTER" verdient.'
//             }
//         },
//         // callbackUrl: 'student2.html',
//         exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
//         // uriHandler: (log) => { console.log(log)}
//     })
//         .then((attestation) => {
//         console.log("Attestation = " + attestation);
//     // document.getElementById("scoreboard").style.display = "inline";
//     document.getElementById("after_claim").style.display = "inline";
//     document.getElementById("after_submit").style.display = "none";
//     document.getElementById("userName").style.display = "none";
//     readCounter();
// })
// };
//
// // attest/issue badge
// const uportAttest1 = function () {
//     lab_connector.attestCredentials({
//         sub: user_data.uportId,
//         claim: {
//             Blockchainquiz: {
//                 Naam: 'LABORANT',
//                 Toelichting: 'Je bent goed op de hoogte wat betreft blockchain, je verdient de title "LABORANT"',
//                 Score: ""
//
//             }
//         },
//         // callbackUrl: 'student2.html',
//         exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
//         // uriHandler: (log) => { console.log(log)}
//     })
//         .then((attestation) => {
//         console.log("Attestation = " + attestation);
//     document.getElementById("after_claim").style.display = "inline";
//     document.getElementById("after_submit").style.display = "none";
//     document.getElementById("userName").style.display = "none";
//     readCounter();
// })
// };
//
// // attest/issue badge
// const uportAttest2 = function () {
//     lab_connector.attestCredentials({
//         sub: user_data.uportId,
//         claim: {
//             Blockchainquiz: {
//                 naam: 'LABASSISTENT',
//                 description: 'De basis is er, nu nog even doorleren. Je krijgt de titel "LABASSISTENT"'
//             }
//         },
//         // callbackUrl: 'student2.html',
//         exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
//         // uriHandler: (log) => { console.log(log)}
//     })
//         .then((attestation) => {
//         console.log("Attestation = " + attestation);
//     document.getElementById("after_claim").style.display = "inline";
//     document.getElementById("after_submit").style.display = "none";
//     document.getElementById("userName").style.display = "none";
//     readCounter();
// })
// };
//
// // attest/issue badge 3
// const uportAttest3 = function () {
//     lab_connector.attestCredentials({
//         sub: user_data.uportId,
//         claim: {
//             Blockchainquiz: {
//                 naam: 'LABVEGER',
//                 description: 'Er is nog veel ruimte voor verbetering, je mag jezelf "LABVEGER" noemen'
//             }
//         },
//         exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
//     })
//         .then((attestation) => {
//         console.log("Attestation = " + attestation);
//     // window.location.href = "index.html";
//     document.getElementById("after_claim").style.display = "inline";
//     document.getElementById("after_submit").style.display = "none";
//     document.getElementById("userName").style.display = "none";
//     readCounter();
//     //
//
// })
// };

// attest/issue badge
var desc = ['Je had alle vragen goed bij de blockchainquiz! Master!',
'Je bent goed op de hoogte wat betreft blockchain',
'De basis is er, nu nog even doorleren',
'Er is nog veel ruimte voor verbetering']
var title = ["LABMASTER", "LABORANT", "LABASSISTENT", "LABVEGER"];

// attest/issue badge
const uportAttest = function (arg1, arg2, score) {
    lab_connector.attestCredentials({
        sub: user_data.uportId,
        claim: {
            Blockchainquiz: {
                Titel: '' + title[arg1],
                Toelichting: '' + desc[arg2],
                Score: '' + score
            }
        },
        // callbackUrl: 'student2.html',
        exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
        // uriHandler: (log) => { console.log(log)}
        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);
            // document.getElementById("scoreboard").style.display = "inline";
            document.getElementById("after_claim").style.display = "inline";
            document.getElementById("after_submit").style.display = "none";
            document.getElementById("userName").style.display = "none";
            readCounter();
        })
}

const contract_abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Scored",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "participant",
          "type": "address"
        },
        {
          "name": "_title",
          "type": "string"
        },
        {
          "name": "_score",
          "type": "uint256"
        }
      ],
      "name": "setScore",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "participant",
          "type": "address"
        }
      ],
      "name": "getScore",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "participant",
          "type": "address"
        }
      ],
      "name": "getTitleAndScore",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "kill",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

function set_score(score, status) {
    var abi = contract_abi;
    console.log(abi);
    var contractAddres = "0x80ee9ef002af02f7f45f5b6703413980e58e8375";
    var contract = web3.eth.contract(abi).at(contractAddres);
    var participant = MNID.decode(user_data.uportId);


    contract.setScore.sendTransaction(participant.address, status, score, {
            from: "0x76ee3fde66d39797bdfca0bb002b40d2b3ebfca9",
            gas: 400000
        },
        function (error, result) {
            if (!error) {
                console.log("hoi")
                console.log(result);
            } else {
                console.error(error);
            }
        });
}

function get_score() {
    var abi = contract_abi;
    console.log(abi);
    var contractAddres = "0x80ee9ef002af02f7f45f5b6703413980e58e8375";
    var contract = web3.eth.contract(abi).at(contractAddres);
    var participant = MNID.decode(user_data.uportId);

    contract.getScore.call(participant, {
            from: "0x76ee3fde66d39797bdfca0bb002b40d2b3ebfca9",
            gas: 400000
        },
        function (error, result) {
            if (!error) {
                console.log(result);

            } else {
                console.error(error);
            }
        });
}
