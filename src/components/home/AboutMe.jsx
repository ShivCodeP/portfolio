import React from "react";
import Pdf from "../../editable-stuff/shivam_fw"

import axios from "axios";

const pictureLinkRegex = new RegExp( /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/ );

const AboutMe = ( { heading, message, link, imgSize, resume } ) =>
{
    const [ porfilePicUrl, setProfilePicUrl ] = React.useState( "" );
    const [ showPic, setShowPic ] = React.useState( Boolean( link ) );

    React.useEffect( () =>
    {
        if ( link && !pictureLinkRegex.test( link ) )
        {
            handleRequest();
        } else
        {
            setProfilePicUrl( link );
        }
    }, [ link ] );

    const handleRequest = async () =>
    {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try
        {
            const response = await axios.get( instaLink + link + instaQuery );
            setProfilePicUrl( response.data.graphql.user.profile_pic_url_hd );
        } catch ( e )
        {
            setShowPic( false );
            console.log( e.message );
        }
    };

    return (
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
            <div className="container constainer-fluid">
                <div className="row">
                    <div className="col-5 d-none d-lg-block align-self-center">
                        { showPic && (
                            <img className="border border-secondary"
                                src={ porfilePicUrl } alt="profile pic"
                                width={ imgSize }
                                height={imgSize}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}