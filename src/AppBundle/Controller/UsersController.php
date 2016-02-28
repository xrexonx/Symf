<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\BrowserKit\Response;

use AppBundle\Entity\User;
use AppBundle\Form\UserType;

class UsersController extends Controller
{
    /**
     * @Route("/signup", name="signup")
     */
    public function indexAction(Request $request)
    {
        return $this->render('users/signup.html.twig', []);
    }

    /**
     * @Route("/create", name="create")
     */
    public function createAction (Request $request) {

        $user = new User();

        $aUser = json_decode($request->getContent(), true);

        $sName = $aUser['name'];
        $sEmail = $aUser['email'];
        $sPassword = hash("sha256", $aUser['password']);
        $iStatus = 0;
        $dCreated = date('Y-m-d h:i:s');
        $sActivation = md5($aUser['email'].$dCreated);

        $user->setName($sName);
        $user->setEmail($sEmail);
        $user->setPassword($sPassword);
        $user->setStatus($iStatus);
        $user->setActivationCode($sActivation);
        $user->setCreated($dCreated);

        $em = $this->getDoctrine()->getManager();

        $em->persist($user);
        $em->flush();

        return new Response('Created user id '.$user->getId());

     //    var_dump($user); die();
    	// $json_data = json_decode($request->getContent(), true);
    	// var_dump($json_data);
    	// die('rexon');
    }

    
}
