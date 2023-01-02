import React, { useState, useEffect } from 'react'
import Fuse from 'fuse.js';
import ClipLoader from "react-spinners/ClipLoader";
import ServerBox from './ServerBox';
import PageFlipper from './PageFlipper';
import { useQueryString } from '../hooks/useQueryString';
import AdSense from 'react-adsense';

const fuse = new Fuse([], {
  shouldSort: true,
  threshold: 0.35,
  keys: [
    {
      name: "description",
      weight: 2.5
    },
    {
      name: "known_players",
      weight: 1
    },
    {
      name: "version",
      weight: 0.3
    },
    {
      name: "ip",
      weight: 0.7
    },
    {
      name: "max_players",
      weight: 0.3
    }
  ]
})

const Servers = ({ perPage, setPerPage, searchQuery, sortBy, page, setPage }) => {

  const [servers, setServers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery !== '' && servers.length > 0) {
      fuse.setCollection(servers.filter(server => {
        return server.online;
      }));
      setSearchResults(fuse.search(searchQuery).map(result => result.item));
    } else {
      setSearchResults(servers.filter(server => server.online));
    }
  }, [searchQuery, servers]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Declipsonator/Server-Info/main/Servers.json')
      .then(res => res.json())
      .then(servers => {
        setServers(servers);
      })
  }, [])

  if (servers.length > 0) {
    var use = searchResults;
    if (sortBy == "playerCount") use.sort((a, b) => a.current_players < b.current_players);
    const serverArray = use.map((server) => {
      return <ServerBox key={server.ip} server={server} />
    })
    return (
      <div>
        <section>
          {serverArray.slice((page - 1) * perPage, page * perPage)}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9894536815792662"
     crossOrigin="anonymous"></script>
          <ins className="adsbygoogle"
               style={{display:"block"}}
               data-ad-format="fluid"
               data-ad-layout-key="-h1-5+1v-2l-d"
               data-ad-client="ca-pub-9894536815792662"
               data-ad-slot="2135140953"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </section>
        <hr />
        <PageFlipper pages={Math.ceil(use.length / perPage)} page={page} setPage={setPage} />
      </div>

    );
  }
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return <div><ClipLoader color={'#fff'} loading={true} css={override} size={70} /></div>;
}

export default Servers;
