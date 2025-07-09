import React, { useState } from "react";

const RegisterForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoUsuario = { nome, email };
        localStorage.setItem('user', JSON.stringify(novoUsuario));
        window.location.href = '/';
    };

    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-blue-100">
                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Cadastrar</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-blue-700 mb-1">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-blue-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div>
                        <label className="block text-blue-700 mb-1">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-blue-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div>
                        <label className="block text-blue-700 mb-1">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-blue-300 p-2 rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 
                        rounded-lg transition duration-300 w-full mt-2"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;
