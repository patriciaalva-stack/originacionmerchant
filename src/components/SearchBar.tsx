import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (location: string) => void;
    loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading = false }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (input && !loading) {
            onSearch(input);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ingresa una ciudad (ej: Buenos Aires, Madrid, Lima)"
                disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
        </form>
    );
};

export default SearchBar;