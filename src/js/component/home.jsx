//create your first component
import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {});
	return (
		<div className="container mt-5">
			<div className="row d-flex justify-content-center">
				<div className="col-5 bg-white border border-3 border-warning rounded-3">
					<p className="title text-center fs-1">My Todo-s</p>
					<div class="input col-12">
						<input
							type="text"
							className="todo-input rounded-3 border border-2 border-warning text-center text-dark fs-3"
							placeholder="Add an Item"
							value={inputValue}
							onChange={(event) => {
								setInputValue(event.target.value);
							}}
							onKeyPress={(event) => {
								if (event.key == "Enter") {
									if (event.target.value == "") {
										alert("Please add some task's");
										return;
									}
									setTask((prevTask) => [
										...prevTask,
										inputValue,
									]);
									setInputValue("");
								}
							}}
						/>
					</div>
					<div class="row d-flex border-top-1 p-3">
						<ul className="todo-list">
							{todoTask.map((task, index) => {
								return (
									<Task
										inputTask={task}
										position={index}
										removeCallBack={(_removeTask) =>
											setTask(
												todoTask.filter(
													(task, index) =>
														index != _removeTask
												)
											)
										}
										key={index}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
