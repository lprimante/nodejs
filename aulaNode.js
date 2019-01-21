// Aula Node.js da Nodebr
const util = require("util")
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
	return new Promise(function resolvePromise(resolve, reject) {
	setTimeout(function () {
		// return reject(new Error("deu muito ruim mesmo!"))

		return resolve({
			id: 1,
			nome: "Aladin",
			dataNascimento: new Date(),
		}) 
	}, 1000)
	})
	
}

function obterTelefone(idUsuario) {
	return new Promise(function resolverPromise(resolve, reject) {
		setTimeout( () => {
			return resolve({
				telefone: "97890-1234",
				ddd: 11
			})
		}, 2000)
	})
	
}

function obterEndereco(idUsuario, callback) {
	setTimeout( () => {
		return callback (null, {
			endereco: "rua dez",
			numero: 10
		})
	}, 2000)
}

main()
async function main() {
	try {
		const usuario = await obterUsuario()
		const telefone = await obterTelefone(usuario.id)
		const endereco = await obterEnderecoAsync(usuario.id)

		console.time('medida-promise')
		console.log(`
			Nome: ${usuario.nome},
			Telefone: (${telefone.ddd}) ${telefone.telefone}
			Endereço: ${endereco.endereco}, ${endereco.numero} 
		`
		)
		console.timeEnd('medida-promise')
	}
	catch(error) {
		console.error("erro", error)
	}
}

// const usuarioPromise = obterUsuario()
// usuarioPromise
// 	.then(function (usuario) {
// 		return obterTelefone(usuario.id)
// 		.then(function resolverTelefone(result) {
// 			return {
// 				usuario: {
// 					nome: usuario.nome,
// 					id: usuario.id
// 				},
// 				telefone: result
// 			}
// 		})
// 	})
// 	.then(function (resultado) {
// 		const endereco = obterEnderecoAsync(resultado.usuario.id)
// 		return endereco.then(function resolverEndereco(result) {
// 			return {
// 				usuario: resultado.usuario,
// 				telefone: resultado.telefone,
// 				endereco: result
// 			}
// 		})
// 	})
// 	.then(function (resultado) {
// 		console.log(`
// 			Nome: ${resultado.usuario.nome}
// 			Endereço: ${resultado.endereco.endereco}, ${resultado.endereco.numero}
// 			Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}

// 		`
// 		)
// 	})
// 	.then(function (resultado) {
// 		console.log("resultado", resultado)
// 	})
// 	.catch(function (error) {
// 		console.error("deu ruim", error)
// 	})




// obterUsuario(function resolverUsuario(error, usuario) {

// })

//const telefone = obterTelefone(usuario.id)
//console.log("telefone", telefone)

