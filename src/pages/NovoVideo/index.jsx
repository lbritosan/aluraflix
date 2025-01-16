// src/pages/NovoVideo.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  border-radius: 8px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #aaa;

    input,
    textarea,
    select {
      margin-top: 5px;
      padding: 10px;
      border: 1px solid #444;
      border-radius: 4px;
      background-color: #222;
      color: #fff;
      font-size: 14px;
    }

    input:focus,
    textarea:focus,
    select:focus {
      border-color: #00baff;
    }
  }

  .error {
    color: #ff4d4d;
    font-size: 12px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }

    .save {
      background-color: #00baff;
      color: #fff;
    }

    .clear {
      background-color: #444;
      color: #fff;
    }
  }
`;

const NovoVideo = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagem: '',
    video: '',
    descricao: '',
  });

  const [errors, setErrors] = useState({});

  const categorias = ['Front End', 'Back End', 'Mobile', 'Inovação'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.titulo) validationErrors.titulo = 'O título é obrigatório.';
    if (!formData.categoria) validationErrors.categoria = 'Selecione uma categoria.';
    if (!formData.imagem) validationErrors.imagem = 'O link da imagem é obrigatório.';
    if (!formData.video) validationErrors.video = 'O link do vídeo é obrigatório.';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Dados enviados:', formData);
      // Aqui você pode adicionar a lógica para salvar os dados
      alert('Vídeo criado com sucesso!');
      setFormData({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: '',
      });
      setErrors({});
    }
  };

  const handleClear = () => {
    setFormData({
      titulo: '',
      categoria: '',
      imagem: '',
      video: '',
      descricao: '',
    });
    setErrors({});
  };

  return (
    <FormContainer>
      <h1>NOVO VÍDEO</h1>
      <p>Complete o formulário para criar um novo card de vídeo.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Título
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Digite o título"
          />
          {errors.titulo && <span className="error">{errors.titulo}</span>}
        </label>
        <label>
          Categoria
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {errors.categoria && <span className="error">{errors.categoria}</span>}
        </label>
        <label>
          Imagem
          <input
            type="text"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            placeholder="Digite o link da imagem"
          />
          {errors.imagem && <span className="error">{errors.imagem}</span>}
        </label>
        <label>
          Vídeo
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Digite o link do vídeo"
          />
          {errors.video && <span className="error">{errors.video}</span>}
        </label>
        <label>
          Descrição
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Sobre o que é esse vídeo?"
          />
        </label>
        <div className="buttons">
          <button type="submit" className="save">
            Guardar
          </button>
          <button type="button" onClick={handleClear} className="clear">
            Limpar
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default NovoVideo;