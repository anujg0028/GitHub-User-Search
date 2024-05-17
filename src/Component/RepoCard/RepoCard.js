import "./repoCard.css";
import React from 'react';
import repoLogo from '../../assets/repoLogo.png';

const RepoCard = ({ data }) => {

    return (
        <div className="repoShowContainer">
            <div className="repoTitle">
                <img src={repoLogo} alt={"No data"} id="repoLogo" />
                <h4>{data.name}</h4>
                <div id="pubPrivDiv">
                    {
                        data.visibility === 'public' ? <p>Public</p> : <p>Private</p>
                    }
                </div>
            </div>
            {
                data.description && (
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                )
            }
            {
                data.language && (
                    <div className="language">
                        {
                            data.language && <div className="languageCircle"></div>
                        }
                        <p>{data.language}</p>
                    </div>
                )
            }
        </div>
    )
};

export default RepoCard;
