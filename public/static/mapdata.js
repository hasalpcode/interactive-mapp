var simplemaps_worldmap_mapdata = {
main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
    background_color: '#C0C0C0',	
    background_transparent: 'no',
		popups: 'on_click', //on_click, on_hover, or detect
	
		//State defaults
    state_description:  "Have multiple links for each state<br /><a  href='#' onClick=\"alert('You would go to Link 1')\">Link 1</a><br /><a  href='#' onClick=\"alert('You would go to Link 2')\">Link 2</a><br /><a  href='#' onClick=\"alert('You would go to Link 3')\">Link 3</a><br />",
    state_color: '#88A4BC',
    state_hover_color: '#3B729F',
    state_url: '',
		border_size: 1.5,		
		border_color: '#ffffff',
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description:  "Have multiple links for each state<br /><a  href='/forms' onClick=\"\">Formulaire</a><br /><br />",
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 15,
		location_type: 'circle', // circle, square, image
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    hide_eastern_labels: false,
		
		//Zoom settings
    manual_zoom: 'no',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
    
		popup_font: '10.5px/3.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},

state_specific:{		
	AE: { 
	name: 'United Arab Emirates',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	inactive: 'no',
	url: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
	},

	AF: { 
	name: 'Afghanistan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AL: { 
	name: 'Albania',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AM: { 
	name: 'Armenia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AO: { 
	name: 'Angola',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AR: { 
	name: 'Argentina',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AT: { 
	name: 'Austria',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AU: { 
	name: 'Australia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	AZ: { 
	name: 'Azerbaidjan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BA: { 
	name: 'Bosnia-Herzegovina',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BD: { 
	name: 'Bangladesh',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BE: { 
	name: 'Belgium',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BF: { 
	name: 'Burkina Faso',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BG: { 
	name: 'Bulgaria',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BH: { 
	name: 'Bahrain',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BI: { 
	name: 'Burundi',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BJ: { 
	name: 'Benin',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BN: { 
	name: 'Brunei Darussalam',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BO: { 
	name: 'Bolivia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BR: { 
	name: 'Brazil',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BS: { 
	name: 'Bahamas',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BT: { 
	name: 'Bhutan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BW: { 
	name: 'Botswana',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BY: { 
	name: 'Belarus',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	BZ: { 
	name: 'Belize',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CA: { 
	name: 'Canada',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CD: { 
	name: 'Congo',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CF: { 
	name: 'Central African Republic',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CG: { 
	name: 'Congo',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CH: { 
	name: 'Switzerland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CI: { 
	name: 'Ivory Coast',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CL: { 
	name: 'Chile',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CM: { 
	name: 'Cameroon',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CN: { 
	name: 'China',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CO: { 
	name: 'Colombia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CR: { 
	name: 'Costa Rica',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CU: { 
	name: 'Cuba',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CV: { 
	name: 'Cape Verde',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CY: { 
	name: 'Cyprus',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	CZ: { 
	name: 'Czech Republic',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	DE: { 
	name: 'Germany',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	DJ: { 
	name: 'Djibouti',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	DK: { 
	name: 'Denmark',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	DO: { 
	name: 'Dominican Republic',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	DZ: { 
	name: 'Algeria',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	EC: { 
	name: 'Ecuador',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	EE: { 
	name: 'Estonia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	EG: { 
	name: 'Egypt',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	EH: { 
	name: 'Western Sahara',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ER: { 
	name: 'Eritrea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ES: { 
	name: 'Spain',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ET: { 
	name: 'Ethiopia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	FI: { 
	name: 'Finland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	FJ: { 
	name: 'Fiji',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	FK: { 
	name: 'Falkland Islands',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	FR: { 
	name: 'France',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GA: { 
	name: 'Gabon',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GB: { 
	name: 'Great Britain',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GE: { 
	name: 'Georgia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GF: { 
	name: 'French Guyana',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GH: { 
	name: 'Ghana',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GL: { 
	name: 'Greenland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GM: { 
	name: 'Gambia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GN: { 
	name: 'Guinea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GQ: { 
	name: 'Equatorial Guinea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GR: { 
	name: 'Greece',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GS: { 
	name: 'S. Georgia & S. Sandwich Isls.',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GT: { 
	name: 'Guatemala',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GW: { 
	name: 'Guinea Bissau',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	GY: { 
	name: 'Guyana',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	HN: { 
	name: 'Honduras',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	HR: { 
	name: 'Croatia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	HT: { 
	name: 'Haiti',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	HU: { 
	name: 'Hungary',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IC: { 
	name: 'Canary Islands',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ID: { 
	name: 'Indonesia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IE: { 
	name: 'Ireland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IL: { 
	name: 'Israel',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IN: { 
	name: 'India',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IQ: { 
	name: 'Iraq',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IR: { 
	name: 'Iran',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IS: { 
	name: 'Iceland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	IT: { 
	name: 'Italy',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	JM: { 
	name: 'Jamaica',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	JO: { 
	name: 'Jordan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	JP: { 
	name: 'Japan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KE: { 
	name: 'Kenya',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KG: { 
	name: 'Kyrgyzstan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KH: { 
	name: 'Cambodia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KP: { 
	name: 'North Korea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KR: { 
	name: 'South Korea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KW: { 
	name: 'Kuwait',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	KZ: { 
	name: 'Kazakhstan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LA: { 
	name: 'Laos',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LK: { 
	name: 'Sri Lanka',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LR: { 
	name: 'Liberia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LS: { 
	name: 'Lesotho',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LT: { 
	name: 'Lithuania',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LU: { 
	name: 'Luxembourg',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LV: { 
	name: 'Latvia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	LY: { 
	name: 'Libya',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MA: { 
	name: 'Morocco',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MD: { 
	name: 'Moldavia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ME: { 
	name: 'Montenegro',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MG: { 
	name: 'Madagascar',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MK: { 
	name: 'Macedonia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ML: { 
	name: 'Mali',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MM: { 
	name: 'Myanmar',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MN: { 
	name: 'Mongolia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MR: { 
	name: 'Mauritania',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MW: { 
	name: 'Malawi',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MX: { 
	name: 'Mexico',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MY: { 
	name: 'Malaysia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	MZ: { 
	name: 'Mozambique',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NA: { 
	name: 'Namibia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NC: { 
	name: 'New Caledonia (French)',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NE: { 
	name: 'Niger',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NG: { 
	name: 'Nigeria',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NI: { 
	name: 'Nicaragua',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NL: { 
	name: 'Netherlands',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NO: { 
	name: 'Norway',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NP: { 
	name: 'Nepal',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	NZ: { 
	name: 'New Zealand',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	OM: { 
	name: 'Oman',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PA: { 
	name: 'Panama',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PE: { 
	name: 'Peru',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PG: { 
	name: 'Papua New Guinea',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PH: { 
	name: 'Philippines',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PK: { 
	name: 'Pakistan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PL: { 
	name: 'Poland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PR: { 
	name: 'Puerto Rico',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PS: { 
	name: 'Palestine',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PT: { 
	name: 'Portugal',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	PY: { 
	name: 'Paraguay',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	QA: { 
	name: 'Qatar',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	RO: { 
	name: 'Romania',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	RS: { 
	name: 'Serbia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	RU: { 
	name: 'Russia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	RW: { 
	name: 'Rwanda',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SA: { 
	name: 'Saudi Arabia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SB: { 
	name: 'Solomon Islands',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SD: { 
	name: 'Sudan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SE: { 
	name: 'Sweden',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SI: { 
	name: 'Slovenia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SK: { 
	name: 'Slovak Republic',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SL: { 
	name: 'Sierra Leone',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},


	SO: { 
	name: 'Somalia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SR: { 
	name: 'Suriname',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SS: { 
	name: 'South Sudan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SV: { 
	name: 'El Salvador',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SY: { 
	name: 'Syria',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	SZ: { 
	name: 'Swaziland',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TD: { 
	name: 'Chad',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TG: { 
	name: 'Togo',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TH: { 
	name: 'Thailand',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TJ: { 
	name: 'Tadjikistan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TL: { 
	name: 'East Timor',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TM: { 
	name: 'Turkmenistan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TN: { 
	name: 'Tunisia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TR: { 
	name: 'Turkey',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TT: { 
	name: 'Trinidad and Tobago',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TW: { 
	name: 'Taiwan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	TZ: { 
	name: 'Tanzania',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	UA: { 
	name: 'Ukraine',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	UG: { 
	name: 'Uganda',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	US: { 
	name: 'United States',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	UY: { 
	name: 'Uruguay',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	UZ: { 
	name: 'Uzbekistan',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	VE: { 
	name: 'Venezuela',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	VN: { 
	name: 'Vietnam',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	VU: { 
	name: 'Vanuatu',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	YE: { 
	name: 'Yemen',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ZA: { 
	name: 'South Africa',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ZM: { 
	name: 'Zambia',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	},

	ZW: { 
	name: 'Zimbabwe',
	description: 'default',
	color: 'default',
	hover_color: 'default',
	url: 'default'
	}//Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
},

// You must number locations sequentially
locations:{

	//Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
  5: { 
    lng:7.7956424,
    lat:7.3580883,
    name: 'Cameroun',
    description: [
      '<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>Teacher incentive<br>School cash grant</td><td>Results in Education for All Children (REACH)<br>Trust Fund program: 20 primary schools in Lagdo<br>subdivision in Cameroon’s North Region.</td></tr><tr><td>2</td><td>CVA <br> School improvement grant - SIG<br> School cash grant</td><td>Addressing educational and psychosocial needs<br>of girls and boys living in conflict-affected areas in<br>Cameroon: regions of North-West, South-West,<br>Far-North, Adamawa, and East.</td></tr></tbody></table></div>',
      '<a href="#">Questionnaire</a>'
    ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'

    
  },
  6: { 
    lng:58.4313802,
    lat:33.5951386,
    name: 'Afghanistan',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  7: { 
    lng:88.1001345,
    lat:23.4956251,
    name: 'Bangladesh',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  8: { 
    lng:-3.7990011,
    lat:12.2435175,
    name: 'Burkina Faso',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  9: { 
    lng:28.8038651,
    lat:-3.3861383,
    name: 'Burundi',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  10: { 
    lng:9.6948014,
    lat:15.2845404,
    name: 'Tchad',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  11: { 
    lng:-72.6229847,
    lat:2.6582684,
    name: 'Colombie',
    description:'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  12: { 
    lng:12.6819203,
    lat:-3.9614552,
    name: 'RDC',
    description:  [
      '<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>School cash grant</td><td>Results in Education for All Children (REACH)<br>Trust Fund program: 90 primary schools in the<br>Walungu and Shabunda districts of South Kivu province.</td></tr></tbody></table></div>',
      '<a href="/forms">Questionnaire</a>'
    ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  },
  24: { 
    lng:36.0011813,
    lat:9.1323434,
    name: 'Ethiopie',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  },
  13: { 
    lng:-74.2363265,
    lat:19.0344149,
    name: 'Haïti',
    description: [
      '<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>CVA <br>School cash grant</td><td>National coverage.</td></tr></tbody></table></div>',
      '<a href="/forms">Questionnaire</a>'
    ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  }, 
  14: { 
    lng:-88.4537853,
    lat:15.2184787,
    name: 'Honduras',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  15: { 
    lng:39.221394,
    lat:33.1493712,
    name: 'Iraq',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  16: { 
    lng:12.8350153,
    lat:26.2998668,
    name: 'Lybie',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  17: { 
    lng:-8.4835097,
    lat:15.5341611,
    name: 'Mali',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  18: { 
    lng:16.794275,
    lat:-17.6640317,
    name: 'Mozambique',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  19: { 
    lng:87.6354588,
    lat:18.8015746,
    name: 'Myanmar',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  20: { 
    lng:3.5833514,
    lat:17.5565337,
    name: 'Niger',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  21: { 
    lng:4.1792325,
    lat:9.0173813,
    name: 'Nigeria',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  22: { 
    lng:41.805597,
    lat:5.2419942,
    name: 'Somalie',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  23: { 
    lng:64.8541921,
    lat:30.2919325,
    name: 'Pakistan',
    description: 'default',
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default'
    
  }, 
  25: { 
    lng:25.1965987,
    lat:7.8496775,
    name: 'South Sudan',
    description: [
      '<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>Teacher incentive</td><td>IMPACT program: National coverage<br>OUTREACH program: Hard-to-reach areas in South Sudan</td></tr><tr><td>2</td><td>School cash grant</td><td>Girls’ Education South Sudan (GESS) Capitation Grants program</td></tr><tr><td>3</td><td>CVA<br>School improvement grant - SIG</td><td>Girls’ Education South Sudan (GESS) program</td></tr></tbody></table></div>',
      '<a href="/forms">Questionnaire</a>'
    ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  },
  26: { 
    lng:30.6867521,
    lat:39.0100022,
    name: 'Turkey',
    description: [
		'<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>Teacher incentive</td><td>Syrian Volunteer Education Personnel (SVEPs) program: National coverage</td></tr></tbody></table></div>',
		'<a href="/forms">Questionnaire</a>'
	  ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  },
  27: { 
    lng:-71.113081,
    lat:6.6477301,
    name: 'Venezuela',
    description: [
		'<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>CVA<br>Teacher incentive<br>School improvement grant - SIG</td><td> National coverage</td></tr></tbody></table></div>',
		'<a href="/forms">Questionnaire</a>'
	  ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  },
  28: { 
    lng:43.5920911,
    lat:15.3640135,
    name: 'Yémen',
    description: [
		'<div><table class="table " style="width:1000px;"><thead><th scope="col">#</th><th scope="col" >Nature</th><th scope="col">Localization</th></thead><tbody><tr><td>1</td><td>Teacher incentive<br>School improvement grant - SIG</td><td> 11 governorates under the de facto authorities.</td></tr></tbody></table></div>',
		'<a href="/forms">Questionnaire</a>'
	  ],
    color: 'default',
    hover_color: 'default',
    url: 'default',
    size: 'default',
	color:'#00561B'
    
  },

}

}





