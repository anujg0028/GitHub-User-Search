import "./home.css";
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Profile from '../UserProfile/Profile';
import Repos from '../UserRepos/Repos';
import axios from 'axios';
import github from '../../assets/github.svg';
import Shimmer from '../Shimmer/Shimmer';
import { toast } from 'react-toastify';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState([]);
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState(0)

    const fetchUserData = async (username) => {
        try {
            const userResponse = await axios.get(`https://api.github.com/users/${username}`);
            const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(reposResponse.data)
            setUserData(userResponse.data);
            setUserRepos(reposResponse.data);
            setError(false);
        } catch (err) {
            setErrorMessage(1)
            setUserData(null);
            setUserRepos([]);
            toast.error("No User is Found!");
        }
    };

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <div className="navBar">
                    <div className="galeryTitle">
                        <img id="logoImg" src={github} alt={"Something went wrong"} />
                        <h3>GitHub User Search</h3>
                    </div>
                    <div className="searchBar">
                        <SearchBar onSearch={fetchUserData} />
                    </div>
                </div>
                <div className="homeMainBody">
                    {
                        userData === null && error ? <Shimmer errorMessage={errorMessage} /> : (
                            <div className="showContainer">
                                {
                                    userData && <Profile user={userData} />
                                }
                                {
                                    userRepos.length > 0 && <Repos repos={userRepos} />
                                }
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;


