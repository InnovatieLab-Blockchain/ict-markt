  const Credentials = uportconnect.Credentials;
  const Connect = uportconnect.Connect;
  const SimpleSigner = uportconnect.SimpleSigner;

  const lab_connector = new Connect('Innovatielab Blockchain', {
      clientId: '2osVEge5GkpT3tJWdzr2TpfwdjsEo27MEoc',
      network: 'rinkeby',
      signer: SimpleSigner('497369198844fe973c9cadc8bdc5b0634fe01cd3ffe69944884cb6506c7f7be4')
  })


  // global variables to reuse
  let user_data = {};

  // print credentials in console to test
  function show_credentials() {
      console.log("Country = " + user_data.uportCountry);
      console.log("Name = " + user_data.uportName)
  }

  // uPort request credentials
  const uportConnect = function() {
      lab_connector.requestCredentials({
              requested: ['name', 'phone', 'country', 'avatar'],
              // callbackUrl:'student.html',
              notifications: true // We want this if we want to recieve credentials
          })
          .then((credentials) => {
              // Do something (in this case print all credentials)
              console.log("Credentials:", credentials);
              user_data.uportId = credentials.address;
              user_data.uportName = credentials.name;
              user_data.uportCountry = credentials.country;
              user_data.uportPhone = credentials.phone;
              user_data.uportAvatar = credentials.avatar;
              var userName = user_data.uportName;
              var UportAvatar = user_data.uportAvatar;
              document.getElementById("login").style.display = "none";
              document.getElementById("header").style.display = "none";
              document.getElementById("after_loginName").style.display = "inline";
              document.getElementById("userName").innerHTML = userName;
              document.getElementById("after_login").style.display = "inline";
              // window.location.href = "studen t.html";
          })
  };

  // attest/issue badge
  const uportAttest = function() {
      lab_connector.attestCredentials({
              sub: user_data.uportId,
              claim: { Blockchainquiz: { naam: 'LABMASTER', description: 'Je had alle vragen goed bij de blockchainquiz en daarmee heb je de titel "LABMASTER" verdient.' } },
              // callbackUrl: 'student2.html',
              exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
              // uriHandler: (log) => { console.log(log)}
          })
          .then((attestation) => {
              console.log("Attestation = " + attestation);
              // document.getElementById("scoreboard").style.display = "inline";
              document.getElementById("after_claim").style.display = "inline";
              document.getElementById("after_submit").style.display = "none";
              document.getElementById("userName").style.display = "none";
              readCounter();
          })
  };

  // attest/issue badge
  const uportAttest1 = function() {
      lab_connector.attestCredentials({
              sub: user_data.uportId,
              claim: { Blockchainquiz: { naam: 'LABORANT', description: 'Je bent goed op de hoogte wat betreft blockchain, je verdient de title "LABORANT"' } },
              // callbackUrl: 'student2.html',
              exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
              // uriHandler: (log) => { console.log(log)}
          })
          .then((attestation) => {
              console.log("Attestation = " + attestation);
              document.getElementById("after_claim").style.display = "inline";
              document.getElementById("after_submit").style.display = "none";
              document.getElementById("userName").style.display = "none";
              readCounter();
          })
  };

  // attest/issue badge
  const uportAttest2 = function() {
      lab_connector.attestCredentials({
              sub: user_data.uportId,
              claim: { Blockchainquiz: { naam: 'LABASSISTENT', description: 'De basis is er, nu nog even doorleren. Je krijgt de titel "LABASSISTENT"' } },
              // callbackUrl: 'student2.html',
              exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
              // uriHandler: (log) => { console.log(log)}
          })
          .then((attestation) => {
              console.log("Attestation = " + attestation);
              document.getElementById("after_claim").style.display = "inline";
              document.getElementById("after_submit").style.display = "none";
              document.getElementById("userName").style.display = "none";
              readCounter();
          })
  };

  // attest/issue badge 3
  const uportAttest3 = function() {
      lab_connector.attestCredentials({
              sub: user_data.uportId,
              claim: { Blockchainquiz: { naam: 'LABVEGER', description: 'Er is nog veel ruimte voor verbetering, je mag jezelf "LABVEGER" noemen' } },
              exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
          })
          .then((attestation) => {
              console.log("Attestation = " + attestation);
              // window.location.href = "index.html";
              document.getElementById("after_claim").style.display = "inline";
              document.getElementById("after_submit").style.display = "none";
              document.getElementById("userName").style.display = "none";
              readCounter();
              //

          })
  };