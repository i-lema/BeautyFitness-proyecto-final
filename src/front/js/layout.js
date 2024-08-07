import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

import { SignUp } from "./pages/signUp";
import injectContext from "./store/appContext";

import { ForgotPassword } from "./pages/forgotPassword";
import { ResetPassword } from "./pages/resetPassword";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UpdateProfile } from "./pages/updateProfile";

import {Profile} from"./pages/profile";
import {Single} from "./pages/single"; // Importa el componente Single

import WorkoutList from "./pages/workoutList"; // Importa el componente WorkoutList
import ProfileExperienceLevel from"./pages/profileExperienceLevel";
import ProfileObjetive from "./pages/profileObjetive";

import Routine from "./pages/routine";

import VideoWorkout from "./pages/videoWorkout";
import DayRoutine from "./pages/dayRoutine";
import Day from "./pages/day";
import { Exercices } from "./pages/exercices";
import { ExercisesListPage } from "./pages/exerciseListPage";
import { SingleExercisePage } from "./pages/singleExercisePage";
import TrainingForm from "./pages/trainingForm";
import TrainingDays from "./pages/trainingDays";
import Test from "./pages/test";
import Test2 from "./pages/test2";
import RoutineDisplay from "./component/routineDisplay";
import Test3 from "./pages/test3";
import RecommendedExercises from "./pages/recomendedExercices";
import ExerciseComponent from "./component/exerciseComponent";
import { FullBody2 } from "./component/2DaysFullBody";
import {ExerciseDetail} from "./pages/exerciseDetail";
import { Exercise } from "./pages/exercise";
import ExerciseDetails from "./pages/exerciseDetails";
import { Choose } from "./component/routinePlaning";
import { FullBody3 } from "./component/3DaysFullBody";
import { WeiderRoutine } from "./component/4DaysWeider";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const { store } = useContext(Context);

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <>
            {!store.token ? (
                <div className="bg-dark text-light h-auto">
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Navbar /> {/* Descomentado para que el Navbar se muestre */}
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<SignUp />} path="/signup" />
                            <Route element={<ForgotPassword />} path="/forgot-password" />
                            <Route element={<ResetPassword />} path="/reset-password" />
                            <Route element={<h1>Not found!</h1>} path="*" />
                        </Routes>  
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
            </div>
            ) : (
                <div className="bg-dark text-light h-auto">
                    <BrowserRouter basename={basename}>
                        <ScrollToTop>
                            <Navbar /> {/* Descomentado para que el Navbar se muestre */}
                            <Routes>
                                <Route element={<Home />} path="/" /> 
                                <Route element={<Profile />} path="/profile" />
                                <Route element={<Login />} path="/login" />
                                <Route element={<SignUp />} path="/signup" />
                                <Route element={<UpdateProfile />} path="/update-profile" />
                                <Route element={<Single />} path="/single" />
                                <Route element={<ForgotPassword />} path="/forgot-password" />
                                <Route element={<ResetPassword />} path="/reset-password" />
                                <Route element={<TrainingForm />} path="/training" />
                                <Route element={<Exercices />} path="/exercices" />
                                <Route element={<Test />} path="/test" />
                                <Route element={<Test2 />} path="/test2" />
                                <Route element={<Test3 />} path="/test3" />
                                <Route path="/exercise/:exerciseId" element={<ExerciseDetails />} />
                                <Route element={<WeiderRoutine />} path="/test4" />
                                <Route element={<Choose />} path="/test5" />
                                <Route element={<ExercisesListPage />} path="/exercises-list/:bodyPart" />
                                <Route element={<SingleExercisePage />} path="/exercise/:exerciseId" />
                                {/* <Route element={<Single />} path="/single/:theid" /> */}
                                <Route element={<Workout />} path="/workout" /> 
                                <Route element={<WorkoutList />} path="/workoutList" /> 
                                <Route element={<ProfileExperienceLevel  />} path="/profileExperienceLevel" />
                                <Route element={<ProfileObjetive  />} path="/profileObjetive" />
                                <Route element={<Day />} path="/day" />
                                <Route element={<TrainingDays />} path="/trainingDays" />
                                <Route element={<DayRoutine />} path="/dayRoutine" />
                                <Route element={<VideoWorkout />} path="/videoWorkout" />
                                <Route element={<SuscriptionInfo />} path="/suscriptionInfo" />
                                {/* <Route element={<Routine  />} path="/routine" />
                                <Route path="/routine/:routineId" element={<Routine />} />
                                <Route path="/routine/:routineId/day/:dayId" element={<Day />} />
                                <Route path="/routine/:routineId/day/:dayId/exercise/:exerciseId" element={<Exercise />} /> */}
                                <Route path="/routine/:routineName" component={RoutineDisplay} />
                                <Route element={<h1>Not found!</h1>} path="*" />
                            </Routes>  
                            <Footer />
                        </ScrollToTop>
                    </BrowserRouter>
                </div>
            )}
        </>
    );
};

export default injectContext(Layout);
