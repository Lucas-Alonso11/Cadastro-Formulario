import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    sexo: "",
    estadoCivil: "",
    cpf: "",
    rg: "",
    cep: "",
    cidade: "",
    estado: "",
    telefone: "",
    email: "",
    profissao: "",
    empresa: "",
    cargo: "",
    renda: "",
  });

  // Estado para armazenar mensagens de erro
  const [errors, setErrors] = useState({});

  // Função para validar os dados do formulário
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nomeCompleto) {
      newErrors.nomeCompleto = "Nome completo é obrigatório.";
    }
    if (!formData.cpf) {
      newErrors.cpf = "CPF é obrigatório.";
    } else if (!/^\d{11}$/.test(formData.cpf)) {
      newErrors.cpf = "CPF deve conter 11 dígitos.";
    }
    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!formData.telefone) {
      newErrors.telefone = "Telefone é obrigatório.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Dados do formulário:", formData);
      alert("Formulário enviado com sucesso!");
      // Aqui você pode adicionar a lógica para enviar os dados para um backend
    } else {
      console.log("Formulário contém erros.");
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        {/* Dados Pessoais */}
        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
          {errors.nomeCompleto && <span className="error">{errors.nomeCompleto}</span>}
        </div>

        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sexo:</label>
          <select name="sexo" value={formData.sexo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Estado Civil:</label>
          <input
            type="text"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          {errors.cpf && <span className="error">{errors.cpf}</span>}
        </div>

        <div className="form-group">
          <label>RG:</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estado:</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          {errors.telefone && <span className="error">{errors.telefone}</span>}
        </div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Dados Profissionais */}
        <div className="form-group">
          <label>Profissão:</label>
          <input
            type="text"
            name="profissao"
            value={formData.profissao}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Empresa:</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Cargo:</label>
          <input
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Renda:</label>
          <input
            type="text"
            name="renda"
            value={formData.renda}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default App;