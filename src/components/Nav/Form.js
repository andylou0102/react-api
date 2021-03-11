import {Link} from 'react-router-dom'

const form = (props) => {
    return (
    <form onSubmit={props.formSubmit}>
        <select defaultValue="" onChange={props.chooseCity}>
            <option value="">--choose city--</option>
            <optgroup label="北部">
                <option value="NewTaipei">新北市</option>
                <option value="Taipei">台北市</option>
                <option value="Keelung">基隆市</option>
                <option value="Taoyuan">桃園市</option>
                <option value="Hsinchu">新竹市</option>
                <option value="HsinchuCounty">新竹縣</option>
            </optgroup>
            <optgroup label="中部">
              <option value="MiaoliCounty">苗栗縣</option>
              <option value="ChanghuaCounty">彰化縣</option>
              <option value="YunlinCounty">雲林縣</option>
              <option value="NantouCounty">南投縣</option>
              <option value="ChiayiCounty">嘉義縣</option>
              <option value="Chiayi">嘉義市</option>
              <option value="Taichung">台中市</option>
            </optgroup>
            <optgroup label="南部">
              <option value="Tainan">台南市</option>
              <option value="Kaohsiung">高雄市</option>
              <option value="PingtungCounty">屏東縣</option>
            </optgroup>
            <optgroup label="東部">
              <option value="YilanCounty">宜蘭縣</option>
              <option value="TaitungCounty">台東縣</option>
              <option value="HualienCounty">花蓮縣</option>
            </optgroup>
            <optgroup label="外島地區">
              <option value="PenghuCounty">澎湖縣</option>
              <option value="KinmenCounty">金門縣</option>
              <option value="LienchiangCounty">連江縣</option>
            </optgroup>
        </select>
        <button><Link to={'/ScenicSpot/' + props.myCity} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >Submit Search</Link></button>
    </form>
    )
}

export default form