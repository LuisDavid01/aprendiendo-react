import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
export function App() {
	return(
		<div className ="App">
		<TwitterFollowCard userName="luisdavidmirandav12@gmail.com" avatar="https://unavatar.io/google/ufidelitas.ac.cr" publicName="Luis David" urlDestino="https://ufidelitas.ac.cr/"/>
		<TwitterFollowCard userName="luisdavidmirandav12@gmail.com" avatar="https://unavatar.io/google/google.com" publicName="Luis David" urlDestino="mailto:luisdavidmirandav12@gmail.com"/>
		<TwitterFollowCard userName="Luis David Miranda" avatar="https://unavatar.io/google/linkedin.com" publicName="Luis David" urlDestino="https://www.linkedin.com/in/luisdavidmirandavillalta/"/>
		<TwitterFollowCard userName="luisDavid01" avatar="https://unavatar.io/google/github.com" publicName="Luis David" urlDestino="https://github.com/LuisDavid01"/>
		</div>
	)
}
