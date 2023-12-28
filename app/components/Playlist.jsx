import { useState } from 'react'
import PlaylistTrack from './PlaylistTrack'
import IncludeTrack from './IncludeTrack'


const options = [
    {
        name: 'Populares',
        page: 'most-played'
    },
    {
        name: 'Recentes',
        page: 'most-recent'
    },
    {
        name: 'Todas',
        page: 'all-tracks'
    },
]

function ButtonTitle({
    title = '',
    onClick = () => { },
    selected = false,
}) {
    return (
        <div
            // className='button-title'
            className={`button-title ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <h1>
                {title}
            </h1>
        </div>
    )

}

export default function Playlist({
    mostPlayed,
    mostRecent,
    allTracks,
    setSelected,
    refreshTracks
}) {

    const [page, setPage] = useState('most-played')
    const mappedValues = {
        'most-played': mostPlayed,
        'most-recent': mostRecent,
        'all-tracks': allTracks,
    }
    const tracks = mappedValues[page]
    const trackElements = tracks?.map((track, key) => <PlaylistTrack key={key} track={track} onClick={setSelected} />)

    console.log('tracks', tracks)
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {options.map((option, key) => (
                            <ButtonTitle
                                key={key}
                                title={option.name}
                                onClick={_ => setPage(option.page)}
                                selected={option.page == page}
                            />
                        ))}
                    </div>
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