import './repos.css';
import React from 'react';
import RepoCard from '../RepoCard/RepoCard';

const Repos = ({ repos }) => {
    return (
        <div className='repoContainer'>
            {repos.map(repo => (
                <RepoCard key={repo.id} data={repo} />
            ))}
        </div>
    );
};

export default Repos;
