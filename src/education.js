import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Term } from './term';

export class Education extends Component{

	constructor(){
		super();
	}

	render(){
		return(
			<Grid>
				<Row>
					<Col xs={0} md={4} />
					<Col xs={12} md={4}> {this.renderSvg()} </Col>
					<Col xs={0} md={4} />
				</Row>
				<Row><h3>Candidate for Bachelor of Computer Science, 
							Software Engineering Option, 
							Combinatorics and Optimization Minor</h3></Row>
				<Row><h2>Courses Taken</h2></Row>
				<Row><h3>(Click a course to view what I Learned)</h3></Row>
				<Row>
					<Col xs={12} md = {6}> <Term term='3B' /> </Col>
					<Col xs={12} md = {6}> <Term term='3A' /> </Col>
				</Row>
				<Row>
					<Col xs={12} md = {6}> <Term term='2B' /> </Col>
					<Col xs={12} md = {6}> <Term term='2A' /> </Col>
				</Row>
				<Row>
					<Col xs={12} md = {6}> <Term term='1B' /> </Col>
					<Col xs={12} md = {6}> <Term term='1A' /> </Col>
				</Row>
			</Grid>
		);
	}

	// It is possible to load REACT SAFE svgs that are not inline however this is the only
	// svg I will use for now.
	renderSvg(){
		return(
			<svg viewBox="0 0 334.582 79.968"  preserveAspectRatio="xMidYMid meet" fitstyle={{verticalAlign: "middle"}}><g id="g3"><g id="g5"><polygon id="polygon7" points="77.562 25.794 84.771 25.794 91.093 46.475 97.95 25.704 103.7 25.704 110.56 46.475 116.89 25.794 123.91 25.794 113.48 56.559 107.64 56.559 100.75 36.575 93.844 56.559 87.997 56.559"/><path id="path9" d="m141.63 43.767l-4.054-9.904-4.059 9.904h8.11zm-7.07-17.981h6.2l13.085 30.772h-7.021l-2.793-6.857h-12.917l-2.795 6.857h-6.855l13.1-30.772z"/><polygon id="polygon11" points="161.17 32.204 151.87 32.204 151.87 26.01 177.19 26.01 177.19 32.204 167.9 32.204 167.9 56.559 161.17 56.559"/><polygon id="polygon13" points="182.3 26.01 205.34 26.01 205.34 31.979 188.98 31.979 188.98 38.18 203.38 38.18 203.38 44.167 188.98 44.167 188.98 50.58 205.56 50.58 205.56 56.559 182.3 56.559"/><path id="path15" d="m226.32 40.849c3.277 0 5.153-1.748 5.153-4.321v-0.088c0-2.881-2.015-4.364-5.285-4.364h-6.674v8.773h6.81zm-13.53-14.839h13.971c3.881 0 6.892 1.088 8.902 3.1 1.698 1.7 2.615 4.095 2.615 6.973v0.093c0 4.935-2.658 8.035-6.544 9.474l7.457 10.91h-7.856l-6.545-9.775h-5.275v9.775h-6.725v-30.55h-0.01z"/><polygon id="polygon17" points="245.7 26.01 252.42 26.01 252.42 50.449 266.72 50.449 266.72 56.559 245.7 56.559"/><path id="path19" d="m293.2 41.371v-0.092c0-5.228-3.838-9.601-9.247-9.601-5.414 0-9.168 4.279-9.168 9.517v0.084c0 5.238 3.842 9.607 9.258 9.607 5.4 0.001 9.16-4.274 9.16-9.515m-25.45 0v-0.092c0-8.678 6.851-15.799 16.287-15.799 9.42 0 16.188 7.03 16.188 15.715v0.084c0 8.689-6.854 15.803-16.278 15.803s-16.2-7.026-16.2-15.711"/><path id="path21" d="m327.56 41.371v-0.092c0-5.228-3.842-9.601-9.258-9.601-5.404 0-9.162 4.279-9.162 9.517v0.084c0 5.238 3.842 9.607 9.246 9.607 5.41 0.001 9.17-4.274 9.17-9.515m-25.45 0v-0.092c0-8.678 6.851-15.799 16.272-15.799 9.434 0 16.195 7.03 16.195 15.715v0.084c0 8.689-6.852 15.803-16.277 15.803s-16.19-7.026-16.19-15.711"/><g id="g23"><path id="path25" d="m94.617 10.55v-8.044h3.098v7.964c0 2.291 1.146 3.478 3.035 3.478s3.036-1.146 3.036-3.377v-8.065h3.098v7.942c0 4.264-2.394 6.354-6.173 6.354-3.79 0.001-6.103-2.11-6.103-6.252z"/><path id="path27" d="m115.12 2.506h2.856l6.596 8.668v-8.668h3.056v14.075h-2.635l-6.817-8.946v8.946h-3.056v-14.075z"/><path id="path29" d="m136.43 2.506h3.097v14.075h-3.097v-14.075z"/><path id="path31" d="m147.13 2.506h3.418l3.681 9.914 3.68-9.914h3.336l-5.688 14.177h-2.735l-5.69-14.177z"/><path id="path33" d="m168.7 2.506h10.619v2.756h-7.541v2.855h6.635v2.754h-6.635v2.958h7.639v2.752h-10.717v-14.075z"/><path id="path35" d="m187.47 2.506h6.437c1.789 0 3.177 0.502 4.103 1.43 0.781 0.782 1.205 1.89 1.205 3.217v0.039c0 2.272-1.229 3.699-3.017 4.364l3.438 5.025h-3.62l-3.015-4.504h-2.435v4.504h-3.099v-14.075h0.01zm6.23 6.837c1.506 0 2.371-0.804 2.371-1.99v-0.041c0-1.326-0.925-2.011-2.433-2.011h-3.076v4.042h3.14z"/><path id="path37" d="m206.33 14.531l1.83-2.19c1.268 1.044 2.594 1.708 4.202 1.708 1.267 0 2.029-0.503 2.029-1.327v-0.041c0-0.783-0.481-1.186-2.834-1.79-2.835-0.724-4.664-1.509-4.664-4.303v-0.04c0-2.554 2.051-4.242 4.925-4.242 2.053 0 3.801 0.644 5.229 1.788l-1.608 2.334c-1.245-0.864-2.474-1.388-3.658-1.388-1.187 0-1.812 0.543-1.812 1.227v0.041c0 0.925 0.604 1.226 3.037 1.849 2.854 0.744 4.465 1.77 4.465 4.224v0.04c0 2.795-2.133 4.363-5.17 4.363-2.14-0.001-4.29-0.745-5.98-2.253z"/><path id="path39" d="m225.59 2.506h3.096v14.075h-3.096v-14.075z"/><path id="path41" d="m240.77 5.362h-4.282v-2.856h11.662v2.856h-4.284v11.219h-3.096v-11.219z"/><path id="path43" d="m259.77 11.031l-5.408-8.525h3.618l3.358 5.65 3.418-5.65h3.519l-5.407 8.466v5.609h-3.098v-5.55z"/><path id="path45" d="m285.88 9.585v-0.04c0-4.003 3.158-7.28 7.502-7.28 4.342 0 7.459 3.238 7.459 7.239v0.041c0 4.001-3.156 7.277-7.502 7.277-4.35 0-7.46-3.235-7.46-7.237zm11.72 0v-0.04c0-2.413-1.77-4.424-4.264-4.424-2.492 0-4.222 1.97-4.222 4.383v0.041c0 2.411 1.769 4.423 4.265 4.423 2.49 0 4.22-1.97 4.22-4.383z"/><path id="path47" d="m307.49 2.506h10.717v2.816h-7.621v2.995h6.717v2.814h-6.717v5.449h-3.096v-14.074z"/></g></g><g id="g49"><g id="g51"><path id="path53" fill="#fff" d="m34.628 79.968l-0.822-0.385c-9.137-4.229-16.51-10.369-21.326-17.76-11.549-17.719-11.93-36.024-12.334-55.403-0.032-1.469-0.062-2.94-0.098-4.415l-0.048-2.005h69.219l-0.05 2.005c-0.036 1.484-0.067 2.965-0.098 4.442-0.405 19.368-0.789 37.667-12.335 55.376-4.805 7.379-12.165 13.52-21.285 17.76l-0.823 0.385z"/></g><path id="path55" fill="#FFD84F" d="m34.469 23.862l-27.12 21.348c-4.359-13.499-4.238-27.613-4.588-41.987h63.273c-0.35 14.408-0.188 28.467-4.576 41.998l-26.989-21.359z"/><path id="path57" fill="#FFD84F" d="m56.431 56.731c-0.669 1.188-1.383 2.368-2.15 3.547-4.824 7.406-11.987 12.888-19.867 16.55-7.91-3.662-15.072-9.144-19.897-16.55-0.752-1.149-2.106-3.463-2.106-3.463l22.06-17.605 21.96 17.521z"/><g fill="#B71F36"><path id="path59" d="m15.903 14.062c-3.205-0.682-6.057-3.064-5.369-6.087 0.008-0.028-0.123-0.781-0.399-0.886-0.021-0.008-0.067-0.092-0.113-0.105-0.124-0.032-0.225-0.086-0.328-0.159-0.035-0.027-0.185-0.077-0.185-0.131-0.058 0.125-0.046 0.24-0.132 0.351-0.029 0.039-0.075 0.101-0.121 0.126-0.058 0.029-0.062 0.083-0.107 0.123-0.24 0.242-0.112 0.608-0.074 0.885 0.011 0.069 0.04 0.154-0.045 0.17-0.102 0.017-0.02-0.028-0.138-0.101-0.028-0.018-0.069-0.062-0.1-0.077-0.05-0.023-0.25-0.05-0.283-0.099-0.036-0.052-0.021-0.07-0.069-0.112-0.112-0.1-0.122-0.298-0.203-0.504-0.014-0.035-0.047-0.215-0.047-0.256 0-0.203-0.523-0.533-0.32-0.365 0.07 0.06-0.012-0.082-0.289-0.151-0.178-0.045-0.383-0.035-0.581-0.009-0.042 0.006-0.079 0.039-0.108 0.061-0.204 0.159-0.393 0.346-0.658 0.358 0.044-0.027 0.067 0.024 0.087 0.048 0.127 0.164 0.034 0.363 0.109 0.543 0.076 0.175 0.204 0.31 0.353 0.432 0.147 0.113 0.401-0.037 0.513 0.163 0 0 0.238 0.055 0.004 0.29-0.431 0.435-0.91 0.083-1.267 0.89 0.54-0.233 0.601 0.592 0.83 0.621 1.033 0.142 1.819 0.324 2.386 1.371 0.347 0.639-0.62 0.669 0.254 0.818 0.445 0.076 0.742 0.301 0.966 0.615 0.235 0.329 0.269 0.773 0.521 1.082 0.183 0.221 0.253 0.265 0.473 0.449 0.1 0.083 0.418 0.166 0.536 0.195 0.119 0.031 0.19 0.092 0.305 0.134 0.12 0.044 0.247 0.086 0.35 0.17 0.086 0.072 0.305 0.146 0.355 0.247 0.09 0.175 0.019 0.355 0.112 0.531 0.029 0.048 0.165 0.006 0.223 0.023 0.053 0.02 0.175 0.026 0.209 0.02 0.209-0.047 0.26-0.062 0.417-0.079 0.238-0.026 0.211 0.046 0.521 0.032 0.064 0 0.092 0.047 0.18 0.047 0.061 0 0.164 0.065 0.182 0.01 0.094-0.295 0.247-0.577 0.422-0.863 0.172-0.286 0.157-0.312 0.376-0.612-0.028 0.009 0.28-0.209 0.252-0.209"/><path id="path61" d="m7.907 14.433c0.938 0.507 0.812 1.755 1.658 2.157 1.505 0.718 3.301 1.209 4.901 0.424-0.356 1.112 0.037 2.044-0.118 2.17-0.503 0.402-2.03-0.077-3.009-0.466-0.674-0.268-1.221 0.733-1.964 0.646 0.038-0.088 0.122-0.345 0.072-0.503-0.117-0.362-0.211-0.467-0.813-0.397-0.389 0.043-0.227 0.364-0.809 0.649-0.23-0.136-0.723-0.29-0.794 0.147-0.033 0.203-0.444-0.711-0.361-0.862 0.381-0.684 0.459-0.843 0.432-0.991-0.045-0.226-0.87-0.529-0.978-0.34-0.257 0.451-1.015-1.45 1.222-1.33-0.602-0.385-0.531-0.453-0.392-0.912 0.018-0.062-0.208-0.301-0.36-0.137-0.051-0.177 0.068-0.37 0.208-0.388 0.368-0.051 0.728-0.071 1.105 0.133"/><path id="path63" d="m12.356 9.827c1.357 0.312 3.385-1.439 4.562 0.625-0.868-0.316-3.439 1.061-4.562-0.625"/><path id="path65" d="m23.704 12.828c-0.027 1.768-1.858 3.678-0.373 5.36-0.606-0.009-1.326-0.22-1.748-0.562-0.235-0.191-0.184 0.843-0.152 1.056 0.028 0.181-1.127-1.091-1.562-0.78-1.224 0.881-1.756 1.245-3.576 1.312-0.507 0.018-0.771 0.427-0.914 0.868-0.413-0.844-0.105-2.764 0.131-3.616 0.645-2.338 2.992-3.032 4.877-4.148 1.351-0.804 1.93-2.376 1.86-3.908 0.958 1.197 1.479 2.913 1.457 4.418"/><path id="path67" d="m15.083 32.737c0.229 0.052 0.06 0.241-0.031 0.299-0.188 0.125-0.316 0.277-0.436 0.465-0.09 0.138-0.152 0.288-0.118 0.46 0.022 0.127 0.065 0.239 0.113 0.354 0.029 0.071 0.096 0.111 0.149 0.17 0.021 0.023 0.104 0.127 0.105 0.136-0.05-0.179 0.201-0.359 0.26-0.325 1.166 0.678 1.234-0.694 1.934-1.159 0.297-0.2 0.968 0.031 0.794 0.637 0.697-0.37 0.902-1.307 1.446-1.894 1.199-1.304 2.881-2.169 4.477-2.873-0.578-0.614-1.427-1.129-1.858-1.83-0.213-0.347-0.468-1.03 0.004-0.903 1.962 0.512 3.062-0.685 3.281-2.23 2.905 0.376 3.661-2.371 4.053-4.447 0.189-1.007 0.741-1.094 0.138-2.812-0.25-0.716 1.29-0.952 1.028-2.192-0.073-0.342-0.497-0.686-0.747-0.727 0.238 0.667-0.881 0.837-1.002 1.11-0.189 0.428-0.466 0.77-0.503 1.218-0.947-1.309-0.18-2.887 0.708-4.113 1.298-1.786 3.987-0.848 5.12 0.305 0.021-0.578-0.428-1.313-0.797-1.669 1.059-0.136 2.208 0.51 3.651-0.255 0.835-0.444 1.676-0.824 2.067-1.808-1.772 0.243-4.177-1.121-5.772-1.4-2.979-0.516-4.978 1.515-6.044 3.938-1.062 2.419-0.381 4.226 0.771 6.034 0.288 0.457-1.022 0.156-1.54 0.425-0.504 0.26-0.71 0.882-0.596 1.431 0.635-0.681 2.318-0.26 2.47 0.906 0.209 1.574-1.38 3.867-2.914 3.181-1.642-0.736-2.572-2.47-3.117-4.417-1.402 1.209-3.998 0.209-5.204 1.391-1.146 1.123 1.787 1.884 2.929 2.413 0.421 0.196 0.843 0.626 0.772 1.157-1.788-1.052-3.942 0.142-3.837 2.051 0.081 1.43 1.828 2.318 3.284 2.438 0.605 0.048 0.971 0.724 0.233 1.186-1.294 0.807-2.734 1.709-4.127 0.249-0.233-0.245-1.067-0.094-1.232 0.352-0.082 0.215-0.107 0.547-0.073 0.767 0.075-0.132 0.163-0.321 0.281-0.308 0.138 0.018 0.305 0.163 0.286 0.265-0.12 0.72-1.062 0.254-1.353 0.812-0.007 0.011-0.021 0.021-0.029 0.034-0.018 0.046-0.043 0.085-0.063 0.127-0.191 0.379-0.453 0.616 0.017 0.912-0.013-0.07 0.232 0.302 0.227 0.366 0.023-0.344 0.381-0.338 0.381-0.338l0.208 0.021 0.206 0.09z"/><path id="path69" d="m9.03 26.01c-0.186-0.059-0.377 0.013-0.56 0.095-0.116 0.052-0.257-0.004-0.328 0.115-0.043 0.072-0.069 0.151-0.046 0.233 0.012 0.043 0.03 0.124 0.067 0.15-0.245-0.02-0.476-0.186-0.663-0.354-0.061-0.055-0.098-0.115-0.157-0.177-0.036-0.039-0.032-0.11-0.058-0.164-0.026-0.058-0.015-0.124-0.017-0.183-0.006-0.168-0.01-0.342 0.066-0.499 0.034-0.069 0.069-0.144 0.121-0.206 0.042-0.052 0.082-0.091 0.126-0.136 0.126-0.12 0.266-0.213 0.432-0.261 0.241-0.073 0.506-0.052 0.736 0.05 0.185 0.079 0.403 0.069 0.597 0.124 0.104 0.028 0.297-0.271 0.156-0.305-0.609-0.146-0.606-0.312-0.835-0.93-0.106-0.122-0.246 0.018-0.307 0.08-0.003-1.182 1.401-1.261 1.989-0.792 0.868 0.699 0.215 2.065 1.282 2.442 0.556 0.199 1.145 0.352 1.719 0.108 1.031-0.44 0.003-1.476 0.334-2.353 0.675-1.768 2.164-1.861 3.94-0.157-1.589 0.527-2.331 2.629-1.462 4.014-1.4-0.55-3.166 0.377-4.15 1.005 0.914-0.918-0.371-1.656-0.696-1.493l-0.39 0.271c-0.188 0.236-0.201 0.481-0.433 0.708-0.129 0.125-0.202 0.15-0.371 0.193-0.232 0.062-0.377 0.043-0.584-0.095-0.038-0.023-0.164 0.03-0.187 0.061-0.113 0.138-0.004 0.206-0.007 0.258-0.022-0.018-0.168-0.134-0.189-0.151-0.132-0.099-0.283-0.187-0.366-0.32-0.083-0.139-0.139-0.481-0.045-0.67 0.092-0.184 0.278-0.242 0.402-0.368 0.118-0.119-0.022-0.3-0.164-0.321"/><path id="path71" d="m43.125 10.396c0.126 0.079-0.01 0.31-0.153 0.349-0.171 0.049-0.41-0.024-0.56 0.034-0.668 0.245-0.669 1.889-0.577 1.699 0.1-0.212 0.593-0.073 0.911-0.011 0.516 0.104 0.906-0.943 1.245-0.914 0.803 0.073 1.552 1.071 1.857 1.726 0.056 0.121-0.336 0.125-0.361 0.529 1.094-0.104 2.018 0.606 2.807 1.255 0.386-0.668 0.772-1.082 1.21-1.52-1.644-1.6-4.911-2.094-4.407-5.01 0.066-0.373-0.356-0.702-0.544-0.887-0.213-0.202-0.697-0.215-0.994-0.284 0.312 0.646-0.251 0.709-0.17 1.733 0 0.033-0.093 0.012-0.128-0.002-0.196-0.085-0.363-0.207-0.551-0.324-0.17-0.105-0.328-0.078-0.515-0.05-0.114 0.016-0.218 0.067-0.313 0.136-0.155 0.111-0.234 0.256-0.342 0.413-0.022 0.028-0.043 0.062-0.067 0.088-0.036 0.036-0.105 0.146-0.11 0.202 0.085-0.009 0.351 0.011 0.396 0.082 0.076 0.12 0.079 0.258 0.169 0.37 0.112 0.144 0.207 0.148 0.371 0.217 0.256 0.108 0.483 0.156 0.764 0.132"/><path id="path73" d="m47.376 9.222c1.026-0.075 2.043-0.864 3.178 0.467-0.21-0.099-0.453-0.134-0.581-0.031-1.256 1.013-2.78 0.67-3.584-0.584 0.327-0.053 0.721 0.167 0.987 0.148"/><path id="path75" d="m51.815 12.945c1.687-0.853 3.391-1.538 4.085-3.631 0.136-0.408 0.448 0.608 0.468 0.666 0.892 2.554-0.887 5.089-0.521 7.695-0.594-0.363-1.262-0.614-1.914-0.634-2.314-0.067-2.863 1.342-2.994 1.209-0.636-0.641-2.459-1.19-2.326-1.07-1.082-0.999 2.042-3.642 3.202-4.235"/><path id="path77" d="m47.206 29.936c0.231 0.356-0.076-0.202 0.187 0.404 1.221-0.512 2.484-1.097 3.835-0.548-0.599-2.745 1.405-3.412 1.563-3.823 0.254-0.658-1.085-1.969-2.095-1.603-1.287 0.46-0.752 2.086-0.993 3.223-0.134 0.628-0.913 1.09-1.56 0.866-1.065-0.367-1.493-1.359-1.757-2.474-0.177-0.74-1.62-0.832-1.931-0.224-0.887 1.722 0.526-0.2 0.435 1.108-0.016 0.221-1.035 0.054-1.264 0.83-0.155 0.527 0.346 0.882 0.977 1.068 0.115 0.031-0.122-0.264 0.036-0.328 0.114-0.045 0.577 0.204 0.521 0.234-0.607 0.371-0.762 1.231 0.323 1.606 0.007 0.002-0.079-0.31 0.003-0.372 0.849-0.631 1.731 0.052 1.733 0.03"/><path id="path79" d="m28.847 47.296c1.016 0.469 1.344-0.037 2.678-0.252 0.187-0.031 0.938 0.459 1.156 0.707-1.337 0.213-2.965 1.377-3.834-0.455"/><path id="path81" d="m28.304 48.363c-0.062-0.068-0.15-0.097-0.232-0.129-0.082-0.039-0.172-0.068-0.268-0.08-0.023-0.007-0.191-0.045-0.218-0.054-0.005 0.06 0.071 0.215 0.027 0.254-0.106 0.101-0.145 0.075-0.23 0.204-0.031 0.052-0.064 0.102-0.077 0.158-0.024 0.117-0.076 0.25-0.09 0.384-0.005 0.067 0.023 0.228 0.038 0.286 0.009 0.033 0.081 0.179 0.102 0.218 0 0 0.161 0.174 0.152 0.166 0.188 0.19 0.034 0.079 0.266 0.31 0.118 0.111-0.054 0.305-0.167 0.274-0.785-0.228-0.896-1.14-1.61-1.419-0.521-0.2-1.269 0.204-1.349 0.996 0.176-0.051 0.358 0.018 0.394 0.162 0.191 0.799 1.362 0.322 1.39 0.884 0.021 0.369-0.876-0.062-1.229 0.172-0.469 0.313-0.532 1.213-0.119 1.737 0.426-0.406 0.956 0.188 1.369-0.107 0.29-0.208 0.393-0.501 0.688-0.632 0.899-0.396 1.164 0.433 0.965 1.263 0.486-0.224 1.629-0.459 1.892-0.531 0.474-0.129 0.494-1.223 1.074-1.625-0.823-0.002-1.84-0.36-2.069-1.162-0.021-0.086 0.037-0.184 0.045-0.28 0.02-0.306-0.008-0.603-0.124-0.884-0.012-0.03-0.042-0.068-0.063-0.104-0.032-0.044-0.06-0.091-0.091-0.139-0.083-0.113-0.203-0.167-0.32-0.24-0.052-0.033-0.116-0.042-0.154-0.095"/><path id="path83" d="m22.261 54.027c0.359 0.701-1.414-0.42-2.078 0.615-0.212 0.333-0.099 1.082-0.099 1.505 0.407-0.371 0.813 0.334 1.574-0.34 0.084 0.075 0.174 0.123 0.059 0.241-0.28 0.281-0.438 0.637-0.29 0.977 0.094 0.225 0.725 0.668 0.73 0.629 0.064-0.455 0.843 0 0.965-0.896 0.053-0.369 0.161-0.984 0.697-0.762 0.487 0.201 0.589 0.754 0.475 1.305 0.779-0.256 2.148-1.055 2.966-0.463 1.099 0.793 2.902 1.121 4.188 1.521-0.854-0.594-1.124-2.141-0.982-3.146-2.024 0.398-4.148 0.33-6.025-0.537-0.513-0.239-0.444-0.832-0.599-1.319-0.177-0.551-0.867-1.06-1.495-1.01-0.337 0.024-1.147 0.731-0.994 0.769-0.052-0.013-0.051 0.104-0.076 0.154 0.151-0.098 0.345 0 0.414 0.164 0.049 0.113 0.098 0.238 0.193 0.333 0.115 0.111 0.313 0.139 0.377 0.26"/><path id="path85" d="m27.112 65.089c0.393-0.482 0.72-0.225 0.892-0.221 0.41 0.014 0.382 0.594 0.341 0.961 1.609-0.779 3.141-1.889 5.03-1.482-1.099-1.148-0.71-3.619 0.845-3.924 0.004 0-1.004-0.164-1.109-0.232-1.352-0.855-3.004-1.676-3.913 0.122-0.452 0.894 0.378 1.614 0.998 2.351 0.112 0.133-0.068 0.215-0.214 0.252-1.479 0.379-4.202 0.602-4.323-1.61-0.014-0.224-0.585-0.406-0.953-0.397-1.096 0.034-1.078 1.43-0.953 1.332 0.239-0.181 0.973-0.115 0.884 0.444-0.082 0.521-1.103-0.276-1.51 0.25-0.342 0.437-0.33 1.157-0.088 1.64-0.05-0.175 0.157-0.308 0.268-0.322 1.135-0.191 1.199 0.203 0.862 1.304-0.025 0.082 0.337 0.778 0.575 0.841-0.019-0.008-0.016-0.16 0.017-0.211 0.032-0.055 0.088-0.094 0.146-0.113 0.123-0.039 0.248-0.033 0.373-0.066 0.06-0.018 0.104-0.055 0.16-0.088 0.089-0.057 0.149-0.135 0.213-0.217 0.266-0.332 0.497-0.758 0.942-0.801 0.205-0.02 0.336 0.074 0.513 0.188"/><path id="path87" d="m38.858 70.221c1.036-1.032 1.786-2.405 2.896-3.409-1.217-0.719-2.726-1.465-2.886-3.074-0.011-0.109 0.169-0.229 0.212-0.209 1.691 0.949 3.973 1.023 5.193-0.703 0.982-1.396 1.41-3.664 3.331-3.793-0.639-1.229 0.079-2.646 1.13-3.293-0.354-0.135-0.81-0.424-1.209-0.351-0.483 0.082-0.691 0.739-1.244 0.841 0.869-2.928-0.812-7.021-4.038-6.949-0.604 0.014-1.389 0.5-1.586 1.163-0.187 0.622-0.282 1.405 0.167 1.94 1.057 1.265 1.819 2.646 1.485 4.312 0.754-0.647 1.448-1.604 1.422-2.624-0.005-0.256 0.458-0.072 0.53-0.179 0.881-1.291-0.561-2.091-1.326-2.903-0.212-0.222 0.327-0.562 0.396-0.539 2.766 0.827 3.027 4.234 1.843 6.451-0.315-0.396-1.487-0.266-1.884-0.398 1.295 0.652 0.959 0.746 0.904 0.959-0.098 0.391-1.258 0.221-1.483 0.508-0.388 0.494-0.681 0.715-0.711 2.361 0.538-0.578 1.24-1.457 2.003-1.064 1.629 0.836-0.08 3.65-1.616 4.117-1.312 0.396-2.526-0.02-3.339-1.163-1.176-1.652-0.323-3.654-1.156-5.33-0.696 0.172-0.538 1.079-0.9 0.916-1.278-0.593-2.006-1.96-2.933-3.106-0.384 0.139-0.554 0.493-0.924 0.477-0.548-0.023-1.581-0.191-1.802 0.084-0.254 0.32-0.442 2.646 1.819 3.484 1.534 0.574 2.751 1.084 3.717 2.282-0.648 0.052-0.874-0.261-1.403-0.28-0.521-0.02-0.851 0.185-1.244 0.385-0.376 0.195-0.817 0.935-0.743 1.521 0.354 2.814 3.659 2.854 5.179 4.635 0.262 0.301-0.398 1.523-1.021 2.02-0.53 0.424-1.803-0.639-1.595-1.536 0.167-0.717-1.568-1.198-2.176-0.376 0.242-0.027 0.302 0.133 0.279 0.243-0.106 0.663 0.715 0.688 0.688 1.024-0.038 0.465-0.44-0.195-0.757-0.254-0.701-0.142-1.396 0.104-1.806 0.666-0.124 0.166-0.398 0.438-0.277 0.725 0.536-0.26 0.815 0.572 1.313 0.314 0.303-0.154 0.552-0.423 0.917-0.33 0.146 0.039 0.297 0.236 0.165 0.32-0.976 0.626-1.756 1.504-1.05 2.502 0.019-0.232 0.202-0.396 0.351-0.438 0.285-0.082 0.661 0.113 0.938 0.022 0.453-0.153 0.219-0.603 0.394-0.925 0.27-0.512 1.191-1.35 1.709-0.738 0.096 0.11 0.021 0.521-0.258 0.525 0.286-0.004 0.542 0.275 0.785 0.224 0.068-0.011 0.142-0.011 0.204-0.044 0.055-0.027 0.118-0.04 0.158-0.085 0.114-0.114 0.247-0.235 0.266-0.418 0.208 0.019 0.473 0.039 0.609-0.14 0.133-0.18 0.298-0.316 0.444-0.453"/><path id="path89" d="m34.144 49.869c1.812-0.508 3.825-1.447 4.259-3.461 0.55 0.329 0.723 1.082 0.729 1.541 0.039 2.522-1.064 4.703-0.529 7.348 0.061 0.299 0.606 1.236 0.358 1.127-0.302-0.139-0.939-0.735-1.291-0.459-0.438 0.346-0.409 0.89-0.62 0.763-0.796-0.485-1.639-1.202-2.025-2.125-0.15-0.351-0.088-1.099-0.188-0.991-0.604 0.66-1.843 0.803-2.761 0.941 0.21-0.188 0.396-0.939 0.364-1.096-0.723-0.36-1.76 0.873-1.742 0.717 0.038-0.399 0.081-0.522 0.119-0.633 0.538-1.581 1.552-3.182 3.327-3.672"/><path id="path91" d="m20.675 6.898c0.47-0.013 0.817-0.304 1.116-0.621-0.024 0.265 0.364 0.64 0.22 0.921-0.179 0.354-0.632 0.565-0.721 0.896-0.187 0.672 0.354 1.33-0.04 1.998-1.164 1.969-3.703 1.316-5.438 1.752 0.119-0.212-0.03-0.527-0.16-0.615 0.77 0.099 1.793-0.069 2-0.65 0.253-0.718 0.38-1.248 0.044-1.839-0.557-0.978-1.711-0.521-2.579-0.182-0.137-0.605 0.432-0.974 0.759-1.058 0.919-0.242 1.753-0.641 2.609-0.959 0.746-0.279 1.426 0.376 2.19 0.357m-1.285 0.978c0.076-0.033 0.116-0.086 0.106-0.096-0.657-0.922-1.449-0.83-1.783-0.009-0.227 0.555 1.095 0.376 1.677 0.105"/><path id="path93" d="m54.199 10.607c-0.248 0.215-0.662 0.208-0.944 0.4-0.171 0.12-0.327 0.247-0.505 0.354-0.084 0.053-0.333 0.163-0.424 0.187-0.253 0.064-0.198 0.034-0.431 0.064-0.141 0.021-0.206 0.027-0.346 0.027s-0.567 0.013-0.705 0.009c-0.33-0.007-0.387 0.016-0.717-0.036-0.19-0.03-0.372-0.081-0.551-0.143-0.121-0.039-0.248-0.062-0.375-0.063 0.016-0.133 0.031-0.275 0.136-0.361 0.138-0.12 0.164-0.014 0.365-0.032 0.009-0.001 0.284 0.023 0.295 0.023 0.046-0.002 0.103-0.004 0.151-0.011 0.087-0.013 0.16-0.029 0.237-0.067 0.099-0.046 0.206-0.076 0.297-0.147 0.03-0.027 0.067-0.053 0.099-0.084 0.065-0.062 0.155-0.093 0.215-0.168 0.188-0.23 0.33-0.453 0.35-0.75 0.02-0.22 0.037-0.445-0.004-0.67-0.007-0.036-0.013-0.074-0.016-0.104-0.014-0.174-0.1-0.338-0.184-0.499-0.504-0.96-1.713-0.021-2.541-0.064 0-0.183-0.016-0.52 0.077-0.64 0.59-0.761 1.503-0.387 1.976-0.736 1.595-1.18 2.018-0.329 3.682 0.133 0.5 0.139 1.216-0.179 1.688-0.38 0.115-0.049 0.114 0.704 0.055 0.857-0.197 0.526-0.744 0.5-0.936 0.974-0.28 0.694-0.324 1.671-1.058 2.021m-1.036-3.175c0.072-0.042-0.059 0.058 0.003-0.004-0.719-0.359-1.653-0.831-1.981 0.128-0.242 0.703 1.356 0.21 1.978-0.124"/><path id="path95" d="m36.432 44.728c0.737 0.175 1.54 0.197 2.018-0.445 0.234 0.998-0.681 1.125-0.851 1.611-0.258 0.744-0.24 1.488-0.96 1.871-1.434 0.764-3.227 1.679-4.871 1.814 0.013-0.201-0.126-0.57 0.138-0.582 0.576-0.027 1.023-0.457 1.154-0.797 0.18-0.475-0.025-1.623-0.454-1.85-0.495-0.262-0.931 0.141-1.386 0.34-0.191-0.505 0.595-1.34 1.827-1.27-0.032-0.002 0.611-0.7 0.581-0.68 0.806-0.55 1.687-0.27 2.804-0.012m-2.19 1.289c0.284 0.105 1.128-0.359 1.434-0.531 0.075-0.041 0.127-0.113 0.187-0.175 0.004-0.007-0.006-0.024-0.018-0.026-0.243-0.053-0.463-0.07-0.699-0.096-0.178-0.021-0.31-0.143-0.488-0.175-0.046-0.013-0.089-0.007-0.138 0.013-0.067 0.025-0.092 0.074-0.147 0.102-0.085 0.039-0.206 0.039-0.283 0.111-0.08 0.069-0.146 0.139-0.171 0.239-0.032 0.118-0.006 0.29 0.076 0.39 0.063 0.08 0.158 0.115 0.247 0.148"/><path id="path97" d="m58.791 37.745c-0.024-0.243 0.582-0.966 0.597-1.497 0.058-1.805 1.145-2.655 1.177-4.584 0.008-0.504-2.076-0.977-2.167-2.062-0.043-0.536-0.221-1.314 0.317-1.302 0.691 0.013 1.37-0.11 1.858-0.542 2.18-1.919 0.34-4.539 0.076-6.854-0.058-0.509 0.881-1.602 0.854-1.961-0.15-1.964-0.515-3.756 0.186-5.684-0.549 0.49-0.713 1.3-1.173 1.715-0.225 0.206-0.333-0.251-0.318-0.321 0.275-1.697 0.951-3.184 1.736-4.796 0.931-1.911 0.465-3.464-1.255-4.034-1.577-0.525-3.099 0.941-3.27 2.448-0.158 1.385 0.272 3.042 0.6 4.175 0.094 0.332 0.038 0.709 0.108 0.996 0.282-1.145 0.313-2.338 0.294-3.548-0.004-0.294 0.231-0.689 0.533-0.776 1.025-0.297 1.555 0.445 1.486 1.018-0.226 1.812-0.591 3.201-1.024 5-0.495 2.055 0.241 4.092 0.458 6.089-0.788-0.462-1.646-0.485-1.95 0.743-0.165 0.652 0.424 1.338 0.604 1.916 0.018-0.785 0.76-1.857 1.479-1.377 0.883 0.586 0.915 3.404 0.72 3.778-0.43 0.815-1.134 1.398-2.112 1.11-0.551-0.162-0.327-0.978-0.657-1.323-1.758-1.817-2.559-3.99-2.708-6.5-0.024-0.368 0.167-1.333 0.114-1.354-2.299-0.946-3.356-0.004-4.311 1.354-0.164-0.41-1.041-0.984-1.111-0.856-0.436 0.809-0.311 2.277 0.343 2.844 1.771 1.535 3.528 2.562 4.523 4.753-1.062 0.14-2.101 0.446-2.509 1.558-0.426 1.16-0.279 2.773 0.945 3.245 0.999 0.383 2.714-0.045 3.09 0.002 1.062 0.138 2.248 1.054 2.082 2.059-0.008 0.05-0.454 2.393-1.471 1.812-0.549-0.314-0.24-1.599-1.077-1.801-1.128-0.272-1.405 1.304-1.261 1.166 0.358-0.342 0.607 0.224 1.306 0.609-2.361-0.513-1.628 1.652-1.542 1.413 0.121-0.336 0.549 0.017 1.395-0.043 0.032 0-0.184 0.177-0.195 0.195-0.133 0.218-0.198 0.323-0.294 0.553-0.047 0.106-0.041 0.226-0.025 0.338 0.01 0.118 0.052 0.218 0.113 0.318 0.012 0.023 0.034 0.043 0.061 0.054 0.01 0.004 0.044 0.057 0.05 0.057 0.051 0.008-0.047-0.166 0.091-0.175 0.032-0.004 0.133-0.019 0.159-0.009 0.062 0.024 0.143 0.064 0.208 0.082 0.061 0.016 0.124 0.027 0.192 0.039 0.16 0.02 0.217 0.025 0.358-0.023 0.119-0.043 0.237-0.067 0.351-0.146-0.151 0.104 0.167-0.152 0.152-0.125 0.147-0.312 0.238-0.224 0.271-0.279 0.25-0.477 0.469-0.521 1.024-0.456 0.053 0.006 0.155 0.118 0.188 0.169 0.039 0.059 0.153 0.359 0.134 0.248 0.04 0.22 0.177 0.357 0.197 0.572"/><path id="path99" d="m41.765 16.011c-0.144-0.092-0.191-0.311-0.289-0.4-0.03-0.033-0.057-0.07-0.088-0.105-0.049-0.05-0.072-0.119-0.092-0.19-0.098-0.336-0.048-0.735 0.257-0.958 0.012-0.011 0.01-0.031 0.016-0.043 0.016-0.031 0.062-0.047 0.069-0.072 0.01-0.028 0.061-0.028 0.043-0.067 0.021 0.011 0.022-0.02 0.031-0.027 0.061-0.078 0.062-0.218-0.054-0.257 0.097 0.008 0.196 0.006 0.295 0.027 0.038 0.008 0.077 0.019 0.114 0.024 0.373 0.048 0.842 0.217 0.942 0.59l0.131 0.15c0.388 0.903 0.256 3.121 2.415 3.655 1.125 0.277 2.257 0.626 3.411 0.606-0.278 1.125-0.275 2.551 0.616 3.366-1.297-0.707-2.161-0.559-3.288-1.624-0.503-0.477-1.676-1.127-2.241-1.031-0.233 0.04 0.322-0.748-0.197-0.905-0.341-0.103-1.25-0.08-1.405 0.153-0.748 1.125-1.534 1.119-1.798 1.346 0.304-0.259-1.223-1.504 0.673-2.179 0.182-0.066 0.247-0.479 0.024-0.582-0.371-0.172-0.68 0.084-1.047 0.299-0.42 0.249-0.517-0.665-1.175-0.328-0.137-1.95 1.601-2.118 2.636-0.901 0.073 0.093 0.361-0.019 0.242-0.121l-0.241-0.426z"/></g><path id="path101" d="m2.131 2.609l0.016 0.628c0.035 1.436 0.064 2.867 0.093 4.294 0.388 18.615 0.754 36.197 11.76 53.086 4.541 6.967 11.511 12.766 20.155 16.77l0.259 0.121 0.258-0.121c8.633-4.014 15.591-9.814 20.122-16.77 11.003-16.882 11.371-34.459 11.759-53.068 0.031-1.433 0.062-2.87 0.097-4.312l0.015-0.628h-64.534zm6.946 45.68l25.383-20.122 25.277 20.067c-0.636 1.656-1.347 3.305-2.145 4.941l-23.13-18.364-23.233 18.422c-0.8-1.64-1.514-3.289-2.152-4.944zm44.687 11.655c-4.36 6.693-11.048 12.294-19.351 16.208-8.315-3.902-15.014-9.503-19.383-16.208-0.732-1.124-1.412-2.25-2.051-3.381l21.48-17.028 21.383 16.979c-0.646 1.148-1.335 2.288-2.078 3.43zm11.561-52.422c-0.268 12.811-0.529 25.125-4.293 37.015l-26.569-21.096-26.681 21.156c-3.784-11.911-4.045-24.254-4.313-37.092-0.024-1.219-0.05-2.441-0.078-3.667h62.015c-0.029 1.23-0.055 2.459-0.081 3.684z"/></g></g></svg>
		);
	}

}