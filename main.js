function TelefoneCelular(ddd, numeroCelular) { 
    this.ddd = ddd 
    this.numeroCelular = numeroCelular

    this.getDdd = function() { return this.ddd; }
    this.setDdd = function(ddd) { this.ddd = ddd; }
    
    this.getNumeroCelular = function() { return this.numeroCelular; }
    this.setNumeroCelular = function(numeroCelular) { this.numeroCelular = numeroCelular; }

    //cada função tem a sub função descrição para mostrar as informações formatadas
    this.descricao = function() {
        return 'Telefone:\n' +
               'DDD: ' + this.getDdd() + '\n' +
               'Número: ' + this.getNumeroCelular();
    }
} 

function Endereco(uf, nomeEstado, rua, numeroCasa) { 
    this.uf = uf 
    this.nomeEstado = nomeEstado 
    this.rua = rua 
    this.numeroCasa = numeroCasa

    this.getUf = function() { return this.uf; }
    this.setUf = function(uf) { this.uf = uf; }
    
    this.getNomeEstado = function() { return this.nomeEstado; }
    this.setNomeEstado = function(nomeEstado) { this.nomeEstado = nomeEstado; }
    
    this.getRua = function() { return this.rua; }
    this.setRua = function(rua) { this.rua = rua; }
    
    this.getNumeroCasa = function() { return this.numeroCasa; }
    this.setNumeroCasa = function(numeroCasa) { this.numeroCasa = numeroCasa; }

    this.descricao = function() {
        return 'Endereço:\n' +
               'Rua: ' + this.getRua() + '\n' +
               'Número: ' + this.getNumeroCasa() + '\n' +
               'Cidade: ' + this.getNomeEstado() + '\n' +
               'Estado: ' + this.getUf();
    }

    // Verificação independente de estar em caixa alta ou baixa
    this.getUfCaixaAlta = function() { return this.uf.toUpperCase(); }
    this.getUfCaixaBaixa = function() { return this.uf.toLowerCase(); }
    
    this.getNomeEstadoCaixaAlta = function() { return this.nomeEstado.toUpperCase(); }
    this.getNomeEstadoCaixaBaixa = function() { return this.nomeEstado.toLowerCase(); }
    
    this.getRuaCaixaAlta = function() { return this.rua.toUpperCase(); }
    this.getRuaCaixaBaixa = function() { return this.rua.toLowerCase(); }
} 

function Cliente(nome, telefoneCelular, email, endereco) { 
    this.nome = nome 
    this.telefoneCelular = telefoneCelular 
    this.email = email 
    this.endereco = endereco

    this.getNome = function() { return this.nome; }
    this.setNome = function(nome) { this.nome = nome; }
    
    this.getTelefoneCelular = function() { return this.telefoneCelular; }
    this.setTelefoneCelular = function(telefoneCelular) { this.telefoneCelular = telefoneCelular; }
    
    this.getEmail = function() { return this.email; }
    this.setEmail = function(email) { this.email = email; }
    
    this.getEndereco = function() { return this.endereco; }
    this.setEndereco = function(endereco) { this.endereco = endereco; }

    this.descricao = function() {
        return '-'.repeat(15) + '\n' +
               'Informações do Cliente:\n' +
               this.getNome() + '\n' +
               '-'.repeat(15) + '\n' +
               '-'.repeat(15) + '\n' +
               this.getTelefoneCelular().descricao() + '\n' +
               '-'.repeat(15) + '\n' +
               this.getEndereco().descricao() + '\n' +
               '-'.repeat(15);
    }

    this.getNomeCaixaAlta = function() { return this.nome.toUpperCase(); }
    this.getNomeCaixaBaixa = function() { return this.nome.toLowerCase(); }
    
    this.getEmailCaixaAlta = function() { return this.email.toUpperCase(); }
    this.getEmailCaixaBaixa = function() { return this.email.toLowerCase(); }
} 

let telefone = new TelefoneCelular('11', '999999999') 
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')  
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.coml', endereco)

console.log(cliente.descricao());

// Para ordenar, ela primeiro cria uma copia dos valores '[...clientes]', depois ela deixa os dois nomes em caixa baixa para não haver erros ao comparar, e por fim, compara os valores usando regras de ordenação da língua.
function ordenarClientesPorNome(clientes) {
    return [...clientes].sort((a, b) => {
        const nomeA = a.getNome().toLowerCase();
        const nomeB = b.getNome().toLowerCase();
        return nomeA.localeCompare(nomeB);
    });
}

// Criação de mais clientes para testar se esta ordenando corretamente
let telefone2 = new TelefoneCelular('21', '888888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Botânica', '554');
let cliente2 = new Cliente('Ana Silva', telefone2, 'ana.silva@app.com', endereco2);

let telefone3 = new TelefoneCelular('31', '777777777');
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Rua da Bahia', '997');
let cliente3 = new Cliente('Bruno Santos', telefone3, 'bruno.santos@app.com', endereco3);

let clientes = [cliente, cliente2, cliente3];

let clientesOrdenados = ordenarClientesPorNome(clientes);

console.log(clientesOrdenados);

