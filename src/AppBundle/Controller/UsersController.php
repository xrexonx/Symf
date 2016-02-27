<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

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
    	$json_data = json_decode($request->getContent(), true);
    	var_dump($json_data);
    	die('rexon');
    }

    
}
