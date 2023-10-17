Feature: workday login scenario

    @regression @updateContactInfo @test
    Scenario: As a user, I should be able to update the phone number
        When I login with "akashrawat1289@gmail.com" and "Fonteva703@"
        And I navigate to user profile page
        Then I navigate to candidate home and update the mobile type
            | mobile_type |
            | Home        |
            | Mobile      |