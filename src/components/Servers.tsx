import React, { useState, useEffect } from 'react'
import Fuse from 'fuse.js';
import ClipLoader from "react-spinners/ClipLoader";
import ServerBox from './ServerBox';
import PageFlipper from './PageFlipper';
import { useQueryString } from '../hooks/useQueryString';

const normal = new Fuse([], {
  shouldSort: true,
  threshold: 0.20,
  keys: [
    {
      name: "description",
      weight: 2.5
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

const players = new Fuse([], {
  shouldSort: true,
  threshold: 0.20,
  keys: [
    {
      name: "known_players.name",
      weight: 1
    },
    {
      name: "known_players.id",
      weight: 1
    }
  ]
})



const Servers = ({ perPage, setPerPage, searchQuery, sortBy, searchBy, page, setPage, serverStatus }: any) => {

  const [servers, setServers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery !== '' && servers.length > 0) {
      if(searchBy == "normal") {
        normal.setCollection(servers.filter((server: { online: boolean }) => {
          if(serverStatus == "all") return true;
          else if(serverStatus == "online" && server.online) return true;
          else if(serverStatus == "offline" && !server.online) return true;
        }));
        setSearchResults(normal.search(searchQuery).map(result => result.item));
      } else if(searchBy == "players") {
        players.setCollection(servers.filter((server: { online: boolean }) => {
          if(serverStatus == "all") return true;
          else if(serverStatus == "online" && server.online) return true;
          else if(serverStatus == "offline" && !server.online) return true;
        }));
        setSearchResults(players.search(searchQuery).map(result => result.item));
      }
    } else {
      setSearchResults(servers.filter((server: { online: boolean }) => {
        if(serverStatus == "all") return true;
        else if(serverStatus == "online" && server.online) return true;
        else if(serverStatus == "offline" && !server.online) return true;
      }));
    }
  }, [searchQuery, servers]);

  useEffect(() => {
      setSearchResults(servers.filter((server: { online: boolean }) => {
        if(serverStatus == "all") return true;
        else if(serverStatus == "online" && server.online) return true;
        else if(serverStatus == "offline" && !server.online) return true;
      }));
  }, [serverStatus])
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Declipsonator/Server-Info/main/Servers.json')
      .then(res => res.json())
      .then(servers => {
        setServers(servers);
      })
  }, [])

  if (servers.length > 0) {
    var use = searchResults;
    if (sortBy == "playerCount") use.sort((a: { current_players: number }, b: { current_players: number }) => a.current_players > b.current_players ? -1 : a.current_players < b.current_players ? 1 : 0);
    const serverArray = use.map((server: { ip: any }) => {
      // @ts-ignore
      return <ServerBox key={server.ip} server={server} />
    })
    return (
      <div>
        <section>
          {serverArray.slice((page - 1) * perPage, page * perPage)}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9894536815792662"
            crossOrigin="anonymous"></script>
          <ins className="adsbygoogle"
            style={{ display: "block" }}
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
  return <div><ClipLoader color={'#fff'} loading={true} size={70} /></div>;
}

export default Servers;
