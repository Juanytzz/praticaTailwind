import { useState } from 'react';
import axios from 'axios';

interface GitHubUser {
    avatar_url: string;
    name: string;
    bio: string | null;
    public_repos: number;
}

function PerfilTailWind() {
    const [username, setUsername] = useState<string>('');
    const [user, setUser] = useState<GitHubUser | null>(null);

    const handleSearch = async () => {
        if (!username.trim()) {
            return;
        }

        setUser(null);

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="mb-4 w-full max-w-md">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite um usuário do GitHub"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Buscar
                </button>
            </div>

            {user && (
                <div className="text-center">
                    <img
                        src={user.avatar_url}
                        alt="Foto do perfil"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold">{user.name || username}</h2>
                    <p className="text-gray-600 mb-2">{user.bio || 'Sem bio'}</p>
                    <p className="text-gray-800">Repositórios públicos: {user.public_repos}</p>
                </div>
            )}
        </div>
    );
}

export default PerfilTailWind;