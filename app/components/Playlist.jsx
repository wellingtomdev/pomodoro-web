

import PlaylistTrack from './PlaylistTrack'
import IncludeTrack from './IncludeTrack'




const Playlist = props => {


    const { tracks, setSelected, refreshTracks } = props
    const trackElements = tracks?.map((track, key) => <PlaylistTrack key={key} track={track} onClick={setSelected} />)


    return (
        <>
            <div id='playlist'>

                <IncludeTrack
                    setSelected={track => {
                        setSelected(track)
                    }}
                    refreshTracks={refreshTracks}
                />

                <div className='playlist-header'>
                    <h1>Mais tocadas</h1>
                </div>
                <div className='playlist-body'>
                    <ul>
                        {trackElements}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Playlist