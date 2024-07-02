import { SquarePen } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Info } from "lucide-react";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

let initialListAnime = [
    {
        id: 1,
        judul: "The Shawsank Redemption",
        image: "https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg",
        rilis: 1994,
        genre: "Action",
        durasi: "142 menit",
        sinopsi: "Selama beberapa tahun, dua narapidana menjalin persahabatan, mencari penghiburan dan, pada akhirnya, penebusan melalui rasa kasih sayang yang mendasar."
    },
    {
        id: 2,
        judul: "The Godfatther",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rilis: 1972,
        genre: "Action",
        durasi: "175 menit",
        sinopsi: "Don Vito Corleone, kepala keluarga mafia, memutuskan untuk menyerahkan kerajaannya kepada putra bungsunya, Michael. Namun, keputusannya secara tidak sengaja membahayakan nyawa orang yang dicintainya."
    },
    {
        id: 3,
        judul: "The Dark Knight",
        image: "https://www.themoviedb.org/t/p/original/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg",
        rilis: 2008,
        genre: "Action",
        durasi: "172 menit",
        sinopsi: "Ketika ancaman yang dikenal sebagai Joker mendatangkan malapetaka dan kekacauan pada masyarakat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar atas kemampuannya melawan ketidakadilan."
    },
]

const savedList = localStorage.getItem("listItem");

const Film = () => {
    const [items,setItems] = useState(savedList? JSON.parse(savedList) : initialListAnime);
    const [updateItems,setUpdateItems] = useState(null)
    const [info,setInfo] = useState(null)
    const [addItems,setAddItems] = useState(null)
    const [orderBy, setOrderBy] = useState("asc");
    const [sortBy, setSortBy] = useState("id");
    const [search, setSearch] = useState("");
    const [like, setLike] = useState({});


    const filterData = items
    .sort((a, b) => {
      if (orderBy === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter((item) => {
      return item.judul.toLowerCase().includes(search.toLowerCase());
    });

    function handleDelete(item){
        if(window.confirm("Are You Sure?")){
            setItems(items.filter((i)=> i.id != item.id))
        }
    }

    function handleUpdate(){
        setItems(items.map((i) => (updateItems.id === i.id? updateItems : i)))
        setUpdateItems(null)
    }

    function handleAdd(){
        const newId = items.length > 0? Math.max(...items.map((i) => i.id)) + 1 : 1;
        setItems([...items, {...addItems,id:newId}])
        setAddItems(null)
    }

    function toggleLike(id) {
        setLike((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id],
        }));
    }
    
    useEffect(() => {
        localStorage.setItem("listItem", JSON.stringify(items));
    });
  return (
    <div>
        <div className="flex w-full items-center p-3">        
        <div className="flex w-1/4 gap-2 justify-center">
        <button
          className="flex items-center gap-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setAddItems(items)}
        >
          <Plus className="text-white" />
          <span>Add</span>
        </button>
      </div>
      <div className="flex w-2/4 bg-gray-100 p-4 gap-1 items-center">
        <Search className="text-gray-400" />
        <input
          type="text"
          className="bg-transparent w-full p-2 outline-none"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <div>
          <label htmlFor="sortBy" className="font-semibold">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ml-2 p-2 border border-gray-300 rounded"
          >
            <option value="id">Normal</option>
            <option value="judul">Judul</option>
            <option value="rilis">Tahun Rilis</option>
          </select>
        </div>
        <div>
        <label htmlFor="orderBy" className="font-semibold">
            Sort by:
          </label>
          <select
            id="orderBy"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            className="ml-2 p-2 border border-gray-300 rounded"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
    </div>
        </div>
        <div className="flex justify-center items-center gap-6">
            {filterData.map((item) => (
                    <div key={item.id}>
                        <div>
                            <img src={item.image} className="w-40 h-40"/>
                            <p className="text-sm text-center">{item.judul}</p>
                            <p className="text-sm text-center">{item.durasi}</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="text-sm" onClick={()=> setUpdateItems(item)}><SquarePen size={20} />Edit</button>
                            <button className="text-sm" onClick={()=> setInfo(item)}><Info size={20} />Info</button>
                            <button className="text-sm" onClick={()=>handleDelete(item)}><Trash size={20} />Delete</button>
                        </div>
                        <div className="w-full flex justify-end">
                                    {like[item.id] ? (
            <Heart size={20} className="hover:opacity-50 cursor-pointer text-red-600" onClick={() => toggleLike(item.id)} />
        ) : (
            <Heart size={20} className="font-semibold hover:opacity-50 cursor-pointer" onClick={() => toggleLike(item.id)} />
        )}
                        </div>
                    </div>
                ))
            }
        </div>
        {info && 
        <div className="fixed inset-0 items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-3 w-1/4">
                <p>{info.judul}</p>
                <p>{info.genre}</p>
                <p>{info.durasi}</p>
                <p>{info.sinopsi}</p>
                <button onClick={() => setInfo(null)}>Cancel</button>
            </div>
        </div>
        }
        {updateItems && 
        <div className="fixed inset-0 items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-3 w-1/4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <label>Judul Film : </label>
            <input
              type="text"
              id="judul"
              value={updateItems.judul}
              onChange={(e) =>
                setUpdateItems({ ...updateItems, judul: e.target.value })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label>Gambar : </label>
            <input
              type="text"
              id="image"
              value={updateItems.image}
              onChange={(e) =>
                setUpdateItems({
                  ...updateItems,
                  image: e.target.value,
                })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label>Rilis : </label>
            <input
              type="number"
              id="rilis"
              value={updateItems.rilis}
              onChange={(e) =>
                setUpdateItems({
                  ...updateItems,
                  rilis: parseInt(e.target.value),
                })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label>Genre : </label>
            <input
              type="text"
              id="genre"
              value={updateItems.genre}
              onChange={(e) =>
                setUpdateItems({
                  ...updateItems,
                  genre: e.target.value,
                })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label>Durasi : </label>
            <input
              type="text"
              id="durasi"
              value={updateItems.durasi}
              onChange={(e) =>
                setUpdateItems({
                  ...updateItems,
                  durasi: e.target.value,
                })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label>Sinopso : </label>
            <input
              type="text"
              id="sinopsi"
              value={updateItems.sinopsi}
              onChange={(e) =>
                setUpdateItems({
                  ...updateItems,
                  sinopsi: e.target.value,
                })
              }
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setUpdateItems(null)}>
              Cancel
            </button>
          </form>
        </div>
      </div>
      }
      {addItems &&
      <div className="fixed inset-0 items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-3 w-1/4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <label>Judul Film : </label>
          <input
            type="text"
            id="judul"
            value={addItems.judul}
            onChange={(e) =>
              setAddItems({ ...addItems, judul: e.target.value })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <label>Gambar : </label>
          <input
            type="text"
            id="image"
            value={addItems.image}
            onChange={(e) =>
              setAddItems({
                ...addItems,
                image: e.target.value,
              })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <label>Rilis : </label>
          <input
            type="number"
            id="rilis"
            value={addItems.rilis}
            onChange={(e) =>
              setAddItems({
                ...addItems,
                rilis: parseInt(e.target.value),
              })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <label>Genre : </label>
          <input
            type="text"
            id="genre"
            value={addItems.genre}
            onChange={(e) =>
              setAddItems({
                ...addItems,
                genre: e.target.value,
              })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <label>Durasi : </label>
          <input
            type="text"
            id="durasi"
            value={addItems.durasi}
            onChange={(e) =>
              setAddItems({
                ...addItems,
                durasi: e.target.value,
              })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <label>Sinopso : </label>
          <input
            type="text"
            id="sinopsi"
            value={addItems.sinopsi}
            onChange={(e) =>
              setAddItems({
                ...addItems,
                sinopsi: e.target.value,
              })
            }
            className="border border-gray-300 p-2 mb-4 w-full"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setAddItems(null)}>
            Cancel
          </button>
        </form>
      </div>
    </div>}
    </div>
  )
}

export default Film