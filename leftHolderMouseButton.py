import cv2
from cvzone.HandTrackingModule import HandDetector
import mouse
import numpy as np
import pyautogui


def game():
    cap = cv2.VideoCapture(0)
    cam_w, cam_h = 560, 480
    cap.set(3, cam_w)
    cap.set(4, cam_h)
    frameR = 100
    detector = HandDetector(detectionCon=0.80, maxHands=1)
    pressed = False
    while True:
        success, img = cap.read()
        img = cv2.flip(img, 1)
        hands, img = detector.findHands(img)
        cv2.rectangle(img, (frameR, frameR), (cam_w - frameR, cam_h - frameR), (255, 0, 255), 2)
        if hands:
            lmlist = hands[0]['lmList']
            ind_x, ind_y = lmlist[8][0], lmlist[8][1]
            cv2.circle(img, (ind_x, ind_y), 5, (0, 255, 255), 2)
            conv_x = int(np.interp(ind_x, (frameR, cam_w - frameR), (0, 1920)))
            conv_y = int(np.interp(ind_y, (frameR, cam_h - frameR), (0, 1080)))
            mouse.move(conv_x, conv_y)
            fingers = detector.fingersUp(hands[0])
            if fingers.count(1) == 1 and pressed != True:
                pressed = True
                pyautogui.mouseDown()
            elif fingers.count(1) == 5 and pressed == True:
                pressed = False
                pyautogui.mouseUp()

        k = cv2.waitKey(1)
        if k == ord('q'):
            break

        cv2.imshow("Detector", img)
        #cv2.moveWindow("Detector", 0, cam_h + 70)
        cv2.setWindowProperty("Detector", cv2.WND_PROP_TOPMOST, 1)
        cv2.waitKey(1)
