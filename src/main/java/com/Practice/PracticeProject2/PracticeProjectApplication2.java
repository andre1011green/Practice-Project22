package com.Practice.PracticeProject2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.SpringVersion;
import org.springframework.security.core.SpringSecurityCoreVersion;

@SpringBootApplication
public class PracticeProjectApplication2
{

	public static void main(String[] args)
	{
		SpringApplication.run(PracticeProjectApplication2.class, args);
		System.out.println("Andre this be Spring Version: " + SpringVersion.getVersion());
		System.out.println("Spring Security Version: " + SpringSecurityCoreVersion.getVersion());
	}

}
