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

    // Verificação de Caixa Alta ou Baixa
    this.getUfCaixaAlta = function() { return this.uf.toCaixaAlta(); }
    this.getUfCaixaBaixa = function() { return this.uf.toCaixaBaixa(); }
    
    this.getNomeEstadoCaixaAlta = function() { return this.nomeEstado.toCaixaAlta(); }
    this.getNomeEstadoCaixaBaixa = function() { return this.nomeEstado.toCaixaBaixa(); }
    
    this.getRuaCaixaAlta = function() { return this.rua.toCaixaAlta(); }
    this.getRuaCaixaBaixa = function() { return this.rua.toCaixaBaixa(); }
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

    this.getNomeCaixaAlta = function() { return this.nome.toCaixaAlta(); }
    this.getNomeCaixaBaixa = function() { return this.nome.toCaixaBaixa(); }
    
    this.getEmailCaixaAlta = function() { return this.email.toCaixaAlta(); }
    this.getEmailCaixaBaixa = function() { return this.email.toCaixaBaixa(); }
} 

let telefone = new TelefoneCelular('11', '999999999') 
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')  
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.coml', endereco)

console.log(cliente.descricao());

